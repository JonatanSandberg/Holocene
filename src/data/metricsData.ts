import mean from '../assets/mean.jpg';
import wind from '../assets/wind.jpg';
import cold from '../assets/cold.jpg';
import flooding from '../assets/flooding.jpg';
import heat from '../assets/heat.jpg';
import humidity from '../assets/humidity.jpg';
import seaLevel from '../assets/sea-Level.jpg';
import drought from '../assets/drought.jpg';
import evapotranspiration from '../assets/evapotranspiration.jpg';
import rainfall from '../assets/rainfall.jpg';

const metricsData = [
  {
    id: "temperature_2m_mean",
    metric: "Mean Temperature (2m)",
    description: "Tracking mean temperature is crucial for understanding global warming and long-term climate trends. Higher mean temperatures over time indicate global warming, which can lead to a range of environmental problems, including more frequent heatwaves, shifting weather patterns, and stress on ecosystems.",
    imageSrc: mean
  },
  {
    id: "temperature_2m_max",
    metric: "Max Temperature (2m)",
    description: "Maximum temperatures are essential for assessing extreme heat events and their impacts on ecosystems and human health. Higher maximum temperatures can lead to heatwaves, increased energy demand for cooling, and heat stress on crops, wildlife, and people.",
    imageSrc: heat
  },
  {
    id: "temperature_2m_min",
    metric: "Min Temperature (2m)",
    description: "Minimum temperatures affect cold spells, influencing agriculture and natural habitats. A rise in minimum temperatures can reduce the frequency of frost events, benefiting agriculture in some regions but disrupting ecosystems dependent on cold winters.",
    imageSrc: cold
  },
  {
    id: "wind_speed_10m_mean",
    metric: "Mean Wind Speed (10m)",
    description: "Wind patterns are critical for understanding energy balance and the movement of weather systems. Higher wind speeds may contribute to increased energy production from wind farms but can also lead to stronger storms and potentially more damage to infrastructure.",
    imageSrc: wind
  },
  {
    id: "relative_humidity_2m_mean",
    metric: "Mean Relative Humidity (2m)",
    description: "Humidity levels are important for tracking changes in precipitation and potential drought conditions. Higher relative humidity can make conditions feel more uncomfortable for humans and increase the likelihood of rain, while lower humidity can lead to dry conditions and drought.",
    imageSrc: humidity
  },
  {
    id: "precipitation_sum",
    metric: "Total Precipitation",
    description: "Tracking precipitation is essential to monitor changes in the water cycle and assess droughts or floods. Higher total precipitation may lead to flooding in some areas, while insufficient rainfall can cause droughts and water shortages.",
    imageSrc: flooding
  },
  {
    id: "rain_sum",
    metric: "Total Rainfall",
    description: "Rainfall measurements help to track shifts in precipitation patterns and water availability. An increase in rainfall can be beneficial for water supplies, but excessive rain can cause floods and waterlogging, harming agriculture and infrastructure.",
    imageSrc: rainfall
  },
  {
    id: "pressure_msl_mean",
    metric: "Mean Sea-Level Pressure",
    description: "Pressure trends help to understand large-scale atmospheric changes, influencing weather and climate patterns. Low pressure is often associated with stormy weather, while high pressure typically brings calm and clear conditions. Significant deviations can signal shifts in weather patterns.",
    imageSrc: seaLevel
  },
  {
    id: "soil_moisture_0_to_10cm_mean",
    metric: "Soil Moisture (0-10cm)",
    description: "Soil moisture is critical for agriculture, plant health, and monitoring drought conditions. Higher soil moisture supports plant growth but can lead to waterlogging if excessive, while lower moisture levels may cause drought stress and hinder plant health.",
    imageSrc: drought
  },
  {
    id: "et0_fao_evapotranspiration_sum",
    metric: "Evapotranspiration",
    description: "Evapotranspiration rates are key to understanding water loss from the surface, influencing water management and agriculture. Higher evapotranspiration indicates more water loss through plants and soil, which can stress water resources, especially in arid regions or during droughts.",
    imageSrc: evapotranspiration
  },
];

export default metricsData;

