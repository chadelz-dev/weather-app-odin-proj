import { isCelsius } from './utils.js';

export async function fetchWeatherData(lat, lon) {
  try {
    console.log('weather.js: Fetching weather for lat:', lat, 'lon:', lon);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,surface_pressure,cloud_cover,wind_speed_10m,visibility&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,rain_sum,showers_sum,snowfall_sum,wind_speed_10m_max,visibility_max,sunrise,sunset&forecast_days=14&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        'weather.js: Fetch failed with status:',
        response.status,
        'Response:',
        await response.text()
      );
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    console.log('weather.js: Weather data:', data);

    const now = new Date();
    const currentHour = now.toISOString().slice(0, 13); // e.g., "2025-06-06T18" for 6 PM

    // Find the closest hour in the hourly data
    const currentIndex = data.hourly.time.findIndex((time) =>
      time.startsWith(currentHour)
    );
    if (currentIndex === -1) {
      console.error('weather.js: No current hour data found');
      throw new Error('No current hour data');
    }

    return {
      current: {
        time: data.hourly.time[currentIndex],
        temperature: isCelsius()
          ? data.hourly.temperature_2m[currentIndex]
          : (data.hourly.temperature_2m[currentIndex] * 9) / 5 + 32,
        relativeHumidity: data.hourly.relative_humidity_2m[currentIndex],
        apparentTemperature: isCelsius()
          ? data.hourly.apparent_temperature[currentIndex]
          : (data.hourly.apparent_temperature[currentIndex] * 9) / 5 + 32,
        precipitationProbability:
          data.hourly.precipitation_probability[currentIndex],
        precipitation: data.hourly.precipitation[currentIndex],
        rain: data.hourly.rain[currentIndex],
        showers: data.hourly.showers[currentIndex],
        snowfall: data.hourly.snowfall[currentIndex],
        pressureMsl: data.hourly.pressure_msl[currentIndex],
        surfacePressure: data.hourly.surface_pressure[currentIndex],
        cloudCover: data.hourly.cloud_cover[currentIndex],
        windSpeed: data.hourly.wind_speed_10m[currentIndex],
        visibility: data.hourly.visibility[currentIndex],
        condition: getWeatherCondition(
          data.hourly.precipitation_probability[currentIndex],
          data.hourly.snowfall[currentIndex],
          data.hourly.cloud_cover[currentIndex]
        ),
      },
      daily: data.daily.time
        .map((time, i) => {
          try {
            return {
              date: time,
              tempMax: isCelsius()
                ? data.daily.temperature_2m_max[i]
                : (data.daily.temperature_2m_max[i] * 9) / 5 + 32,
              tempMin: isCelsius()
                ? data.daily.temperature_2m_min[i]
                : (data.daily.temperature_2m_min[i] * 9) / 5 + 32,
              apparentTempMax: isCelsius()
                ? data.daily.apparent_temperature_max[i]
                : (data.daily.apparent_temperature_max[i] * 9) / 5 + 32,
              apparentTempMin: isCelsius()
                ? data.daily.apparent_temperature_min[i]
                : (data.daily.apparent_temperature_min[i] * 9) / 5 + 32,
              precipitationProbability:
                data.daily.precipitation_probability_max[i],
              rain: data.daily.rain_sum[i],
              showers: data.daily.showers_sum[i],
              snowfall: data.daily.snowfall_sum[i],
              windSpeed: data.daily.wind_speed_10m_max[i],
              visibility: data.daily.visibility_max[i],
              sunrise: data.daily.sunrise[i],
              sunset: data.daily.sunset[i],
              condition: getWeatherCondition(
                data.daily.precipitation_probability_max[i],
                data.daily.snowfall_sum[i],
                0
              ),
            };
          } catch (error) {
            console.error(
              'weather.js: Daily data processing error at index:',
              i,
              error
            );
            return null;
          }
        })
        .filter((entry) => entry),
    };
  } catch (error) {
    console.error('weather.js: fetchWeatherData error:', error);
    throw error;
  }
}

function getWeatherCondition(precipitationProbability, snowfall, cloudCover) {
  try {
    if (snowfall > 0) return 'snowy';
    if (precipitationProbability > 50) return 'rainy';
    if (cloudCover > 80) return 'cloudy';
    return 'sunny';
  } catch (error) {
    console.error('weather.js: getWeatherCondition error:', error);
    return 'sunny';
  }
}
