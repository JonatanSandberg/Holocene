import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import '../styles/WeatherChart.css';

Chart.register(...registerables);

interface WeatherData {
  daily: {
    time: Date[];
    temperature2mMean: number[];
    precipitationSum: number[];
    windSpeed10mMean: number[];
    relativeHumidity2mMean: number[];
    soilMoisture0To10cmMean: number[];
    et0FaoEvapotranspirationSum: number[];
    rainSum: number[];
    temperature2mMax: number[];
    temperature2mMin: number[];
    pressureMslMean: number[];
  };
}

interface WeatherChartProps {
  weatherData: WeatherData;
  selectedMetric: string;
  tribeName: string;
}

const WeatherChart: React.FC<WeatherChartProps> = ({ weatherData, selectedMetric, tribeName }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (!weatherData || !weatherData.daily) return;

    let chartConfig: any = null;

    switch (selectedMetric) {
      case 'temperature_2m_mean':
      case 'temperature_2m_max':
      case 'wind_speed_10m_mean':
      case 'pressure_msl_mean':
        chartConfig = {
          type: 'line',
          data: {
            labels: weatherData.daily.time.map(date => date.toISOString().split('T')[0]),
            datasets: [
              {
                label: selectedMetric === 'temperature_2m_mean'
                  ? 'Mean Temperature'
                  : selectedMetric === 'temperature_2m_max'
                  ? 'Max Temperature'
                  : selectedMetric === 'wind_speed_10m_mean'
                  ? 'Mean Wind Speed'
                  : 'Mean Pressure',
                data: selectedMetric === 'temperature_2m_mean'
                  ? weatherData.daily.temperature2mMean
                  : selectedMetric === 'temperature_2m_max'
                  ? weatherData.daily.temperature2mMax
                  : selectedMetric === 'wind_speed_10m_mean'
                  ? weatherData.daily.windSpeed10mMean
                  : weatherData.daily.pressureMslMean,
                borderColor: `var(--${selectedMetric})`,
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: { title: { display: true, text: 'Date' } },
              y: {
                title: {
                  display: true,
                  text: selectedMetric.includes('temperature') ? 'Temperature (°C)' :
                        selectedMetric.includes('wind_speed') ? 'Wind Speed (m/s)' : 'Pressure (hPa)',
                },
              },
            },
          },
        };
        break;

      case 'precipitation_sum':
      case 'rain_sum':
      case 'et0_fao_evapotranspiration_sum':
      case 'soil_moisture_0_to_10cm_mean':
        chartConfig = {
          type: 'bar',
          data: {
            labels: weatherData.daily.time.map(date => date.toISOString().split('T')[0]),
            datasets: [
              {
                label: selectedMetric === 'precipitation_sum'
                  ? 'Total Precipitation'
                  : selectedMetric === 'rain_sum'
                  ? 'Rain Sum'
                  : selectedMetric === 'et0_fao_evapotranspiration_sum'
                  ? 'Evapotranspiration'
                  : 'Soil Moisture',
                data: selectedMetric === 'precipitation_sum'
                  ? weatherData.daily.precipitationSum
                  : selectedMetric === 'rain_sum'
                  ? weatherData.daily.rainSum
                  : selectedMetric === 'et0_fao_evapotranspiration_sum'
                  ? weatherData.daily.et0FaoEvapotranspirationSum
                  : weatherData.daily.soilMoisture0To10cmMean,
                backgroundColor: `var(--${selectedMetric})`,
                borderColor: 'rgba(0, 0, 0, 0)',
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: { title: { display: true, text: 'Date' } },
              y: { title: { display: true, text: 'Value' } },
            },
          },
        };
        break;

      case 'temperature_2m_min':
      case 'relative_humidity_2m_mean':
        chartConfig = {
          type: 'line',
          data: {
            labels: weatherData.daily.time.map(date => date.toISOString().split('T')[0]),
            datasets: [
              {
                label: selectedMetric === 'temperature_2m_min' ? 'Min Temperature' : 'Relative Humidity',
                data: selectedMetric === 'temperature_2m_min'
                  ? weatherData.daily.temperature2mMin
                  : weatherData.daily.relativeHumidity2mMean,
                borderColor: `var(--${selectedMetric})`,
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: { title: { display: true, text: 'Date' } },
              y: {
                title: {
                  display: true,
                  text: selectedMetric.includes('temperature') ? 'Temperature (°C)' : 'Relative Humidity (%)',
                },
              },
            },
          },
        };
        break;

      default:
        break;
    }

    if (chartConfig && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, chartConfig);
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [weatherData, selectedMetric]);

  return (
    <div className="chart-container">
      <h4>Weather Chart for {tribeName}, {selectedMetric}</h4>
      <canvas ref={chartRef} />
    </div>
  );
};

export default WeatherChart;





















