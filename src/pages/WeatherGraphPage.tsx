import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tribesData from '../data/tribesData'; // Tribe data
import { useFavorites } from '../context/FavoritesContext';
import { fetchWeatherApi } from 'openmeteo'; // Import the fetchWeatherApi function
import WeatherChart from '../components/WeatherChart'; // Import WeatherChart component
import WeatherMetricCard from '../components/WeatherMetricCard'; // Import the WeatherMetricCard component
import metricsData from '../data/metricsData'; // Import the metrics data
import '../styles/WeatherGraphPage.css';

interface WeatherData {
  daily: {
    time: Date[];
    temperature2mMean: number[];
    temperature2mMax: number[];
    temperature2mMin: number[];
    windSpeed10mMean: number[];
    relativeHumidity2mMean: number[];
    precipitationSum: number[];
    rainSum: number[];
    pressureMslMean: number[];
    soilMoisture0To10cmMean: number[];
    et0FaoEvapotranspirationSum: number[];
  };
}

const WeatherGraphPage: React.FC = () => {
  const { tribeName } = useParams<{ tribeName: string }>();
  const tribe = tribesData.find((tribe) => tribe.name === tribeName);
  const coordinates = tribe ? tribe.coords : null;

  const { favorites } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  useEffect(() => {
    if (tribe) {
      const isFavorite = favorites.some((fav) => fav.name === tribe.name);
      setIsFavorited(isFavorite);
    }
  }, [favorites, tribe]);

  const fetchWeatherData = async () => {
    if (!coordinates) return;

    const params = {
      latitude: coordinates[0],
      longitude: coordinates[1],
      start_date: "1950-01-01",
      end_date: "2050-12-31",
      models: ["EC_Earth3P_HR", "NICAM16_8S"],
      daily: [
        "temperature_2m_mean", "temperature_2m_max", "temperature_2m_min",
        "wind_speed_10m_mean", "relative_humidity_2m_mean",
        "precipitation_sum", "rain_sum", "pressure_msl_mean",
        "soil_moisture_0_to_10cm_mean", "et0_fao_evapotranspiration_sum"
      ]
    };

    const url = "https://climate-api.open-meteo.com/v1/climate";
    setLoading(true);
    setError(null);

    try {
      const responses = await fetchWeatherApi(url, params);
      const response = responses[0];
      if (!response) throw new Error("No response from the weather API.");

      const utcOffsetSeconds = response.utcOffsetSeconds();
      const daily = response.daily();
      if (!daily || !daily.time() || !daily.variables) {
        throw new Error("Invalid data structure received from the API.");
      }

      const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

      const fetchedWeatherData: WeatherData = {
        daily: {
          time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
          ),
          temperature2mMean: daily.variables(0)!.valuesArray()!,
          temperature2mMax: daily.variables(1)!.valuesArray()!,
          temperature2mMin: daily.variables(2)!.valuesArray()!,
          windSpeed10mMean: daily.variables(3)!.valuesArray()!,
          relativeHumidity2mMean: daily.variables(4)!.valuesArray()!,
          precipitationSum: daily.variables(5)!.valuesArray()!,
          rainSum: daily.variables(6)!.valuesArray()!,
          pressureMslMean: daily.variables(7)!.valuesArray()!,
          soilMoisture0To10cmMean: daily.variables(8)!.valuesArray()!,
          et0FaoEvapotranspirationSum: daily.variables(9)!.valuesArray()!,
        }
      };

      const sampledWeatherData: WeatherData = {
        daily: {
          time: fetchedWeatherData.daily.time.filter((_, index) => index % 30 === 0),
          temperature2mMean: fetchedWeatherData.daily.temperature2mMean.filter((_, index) => index % 30 === 0),
          temperature2mMax: fetchedWeatherData.daily.temperature2mMax.filter((_, index) => index % 30 === 0),
          temperature2mMin: fetchedWeatherData.daily.temperature2mMin.filter((_, index) => index % 30 === 0),
          windSpeed10mMean: fetchedWeatherData.daily.windSpeed10mMean.filter((_, index) => index % 30 === 0),
          relativeHumidity2mMean: fetchedWeatherData.daily.relativeHumidity2mMean.filter((_, index) => index % 30 === 0),
          precipitationSum: fetchedWeatherData.daily.precipitationSum.filter((_, index) => index % 30 === 0),
          rainSum: fetchedWeatherData.daily.rainSum.filter((_, index) => index % 30 === 0),
          pressureMslMean: fetchedWeatherData.daily.pressureMslMean.filter((_, index) => index % 30 === 0),
          soilMoisture0To10cmMean: fetchedWeatherData.daily.soilMoisture0To10cmMean.filter((_, index) => index % 30 === 0),
          et0FaoEvapotranspirationSum: fetchedWeatherData.daily.et0FaoEvapotranspirationSum.filter((_, index) => index % 30 === 0),
        }
      };

      setWeatherData(sampledWeatherData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [coordinates]);

  const handleCardClick = (metricId: string) => {
    setSelectedMetric(metricId);
  };

  return (
    <div className="weather-graph-page">
      {loading && <p>Loading weather data...</p>}
      {error && <p className="error-message">Failed to fetch weather data: {error}</p>}

      <div className="card-container">
        {metricsData.map((metric) => (
          <WeatherMetricCard
            key={metric.id}
            metric={metric.metric}
            description={metric.description}
            imageSrc={metric.imageSrc}
            onClick={() => handleCardClick(metric.id)}
          />
        ))}
      </div>

      {selectedMetric && weatherData && (
        <div className="weather-data">
          <h4>Weather Data for {selectedMetric}</h4>
          <WeatherChart weatherData={weatherData} selectedMetric={selectedMetric} />
        </div>
      )}
    </div>
  );
};

export default WeatherGraphPage;




















