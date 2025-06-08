import { isCelsius } from './utils.js';

export async function displayWeather(data) {
  try {
    console.log('display.js: Displaying weather data:', data);
    const currentDiv = document.getElementById('hourly-data');
    const dailyDiv = document.getElementById('daily-data');

    if (!currentDiv)
      console.error('display.js: Current div #hourly-data not found');
    if (!dailyDiv) console.error('display.js: Daily div #daily-data not found');

    const currentCondition = data.current?.condition || 'sunny';
    console.log('display.js: Current condition:', currentCondition);

    try {
      const iconModule = await import(
        `../assets/icons/${currentCondition}.svg`
      );
      console.log('display.js: SVG loaded for condition:', currentCondition);

      currentDiv.innerHTML = `
        <div class="current-weather">
          <img src="${
            iconModule.default
          }" alt="${currentCondition}" class="weather-icon">
          <p>Current Time: ${new Date(
            data.current.time
          ).toLocaleTimeString()}</p>
          <p>Temperature: ${data.current.temperature.toFixed(1)}°${
        isCelsius() ? 'C' : 'F'
      }</p>
          <p>Feels Like: ${data.current.apparentTemperature.toFixed(1)}°${
        isCelsius() ? 'C' : 'F'
      }</p>
          <p>Humidity: ${data.current.relativeHumidity}%</p>
          <p>Precipitation Probability: ${
            data.current.precipitationProbability
          }%</p>
          <p>Precipitation: ${data.current.precipitation}mm</p>
          <p>Rain: ${data.current.rain}mm</p>
          <p>Showers: ${data.current.showers}mm</p>
          <p>Snowfall: ${data.current.snowfall}cm</p>
          <p>Sea-Level Pressure: ${data.current.pressureMsl}hPa</p>
          <p>Surface Pressure: ${data.current.surfacePressure}hPa</p>
          <p>Cloud Cover: ${data.current.cloudCover}%</p>
          <p>Wind Speed: ${data.current.windSpeed}km/h</p>
          <p>Visibility: ${data.current.visibility}m</p>
          <p>Sunrise: ${new Date(
            data.daily[0].sunrise
          ).toLocaleTimeString()}</p>
          <p>Sunset: ${new Date(data.daily[0].sunset).toLocaleTimeString()}</p>
        </div>
      `;
      currentDiv.dataset.current = JSON.stringify(data.current);
    } catch (error) {
      console.error('display.js: Current SVG or HTML error:', error);
    }

    try {
      // Check for existing toggle button
      let toggleButton = dailyDiv.parentNode.querySelector('.toggle-forecast');
      if (!toggleButton) {
        // Create new button only if it doesn't exist
        toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-forecast';
        dailyDiv.parentNode.insertBefore(toggleButton, dailyDiv);
      }

      // Initialize as collapsed and set button text
      dailyDiv.classList.add('collapsed');
      toggleButton.textContent = 'Show 14-Day Forecast';

      // Update or attach toggle event
      toggleButton.onclick = () => {
        dailyDiv.classList.toggle('collapsed');
        toggleButton.textContent = dailyDiv.classList.contains('collapsed')
          ? 'Show 14-Day Forecast'
          : 'Hide 14-Day Forecast';
        console.log('display.js: Toggled 14-day forecast visibility');
      };

      dailyDiv.innerHTML = await Promise.all(
        data.daily.map(async (day, i) => {
          try {
            const dayIconModule = await import(
              `../assets/icons/${day.condition}.svg`
            );
            console.log(
              'display.js: Daily SVG loaded for condition:',
              day.condition
            );
            return `
              <div class="forecast-day">
                <div class="forecast-header">
                  <img src="${dayIconModule.default}" alt="${
              day.condition
            }" class="weather-icon">
                  <span>${new Date(day.date).toLocaleDateString()}</span>
                </div>
                <div class="forecast-details">
                  <p>High: ${day.tempMax.toFixed(1)}°${
              isCelsius() ? 'C' : 'F'
            }</p>
                  <p>Low: ${day.tempMin.toFixed(1)}°${
              isCelsius() ? 'C' : 'F'
            }</p>
                  <p>Feels Like High: ${day.apparentTempMax.toFixed(1)}°${
              isCelsius() ? 'C' : 'F'
            }</p>
                  <p>Feels Like Low: ${day.apparentTempMin.toFixed(1)}°${
              isCelsius() ? 'C' : 'F'
            }</p>
                  <p>Precipitation Probability: ${
                    day.precipitationProbability
                  }%</p>
                  <p>Rain: ${day.rain}mm</p>
                  <p>Showers: ${day.showers}mm</p>
                  <p>Snowfall: ${day.snowfall}cm</p>
                  <p>Wind Speed: ${day.windSpeed}km/h</p>
                  <p>Visibility: ${day.visibility}m</p>
                  <p>Sunrise: ${new Date(day.sunrise).toLocaleTimeString()}</p>
                  <p>Sunset: ${new Date(day.sunset).toLocaleTimeString()}</p>
                </div>
              </div>
            `;
          } catch (error) {
            console.error(
              'display.js: Daily SVG or HTML error at index:',
              i,
              error
            );
            return '';
          }
        })
      ).then((html) => html.join(''));
      dailyDiv.dataset.daily = JSON.stringify(data.daily);
    } catch (error) {
      console.error('display.js: Daily display error:', error);
    }
  } catch (error) {
    console.error('display.js: displayWeather error:', error);
  }
}

export function displayError(message) {
  try {
    console.log('display.js: Displaying error:', message);
    const errorDiv = document.getElementById('error');
    if (!errorDiv) {
      console.error('display.js: Error div #error not found');
      return;
    }
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
      console.log('display.js: Error message hidden');
    }, 5000);
  } catch (error) {
    console.error('display.js: displayError error:', error);
  }
}

export function setLoading(isLoading) {
  try {
    console.log('display.js: Setting loading state:', isLoading);
    const loadingDiv = document.getElementById('loading');
    if (!loadingDiv) {
      console.error('display.js: Loading div #loading not found');
      return;
    }
    loadingDiv.style.display = isLoading ? 'block' : 'none';
  } catch (error) {
    console.error('display.js: setLoading error:', error);
  }
}
