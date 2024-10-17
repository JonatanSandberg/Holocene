// src/services/weatherService.ts
import { fetchWeatherApi } from 'openmeteo';

// Function to fetch weather data based on coordinates
export const fetchWeatherData = async (latitude: number, longitude: number) => {
  const params = {
    latitude,
    longitude,
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
  const response = await fetchWeatherApi(url, params);

  if (!response || !response.length) {
    throw new Error("No response from the weather API.");
  }

  const weatherResponse = response[0]; // Assuming single location
  const utcOffsetSeconds = weatherResponse.utcOffsetSeconds();
  const daily = weatherResponse.daily()!;

  const fetchedWeatherData = {
    daily: {
      time: daily.time().map(t => new Date((t + utcOffsetSeconds) * 1000)),
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

  return fetchedWeatherData;
};

