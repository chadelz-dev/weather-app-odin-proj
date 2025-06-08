import { getLocationSuggestions, getSelectedLocation } from './search.js';
import { fetchWeatherData } from './weather.js';
import { displayWeather, displayError, setLoading } from './display.js';
import { toggleTempUnit } from './utils.js';
import '../css/styles.css';

console.log('index.js: Script loaded');

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

try {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('index.js: DOMContentLoaded fired');

    const form = document.getElementById('location-form');
    const input = document.getElementById('location-input');
    const toggleBtn = document.getElementById('temp-toggle');

    if (!form) console.error('index.js: Form element #location-form not found');
    if (!input)
      console.error('index.js: Input element #location-input not found');
    if (!toggleBtn)
      console.error('index.js: Toggle button #temp-toggle not found');

    // Autocomplete
    input.addEventListener(
      'input',
      debounce(async () => {
        const query = input.value.trim();
        console.log('index.js: Autocomplete triggered for query:', query);
        if (query.length < 3) {
          const suggestionsDiv = document.getElementById(
            'autocomplete-suggestions'
          );
          if (suggestionsDiv) suggestionsDiv.innerHTML = '';
          return;
        }
        try {
          setLoading(true);
          const suggestions = await getLocationSuggestions(query);
          console.log('index.js: Suggestions received:', suggestions);
          displaySuggestions(suggestions);
        } catch (error) {
          console.error('index.js: Autocomplete error:', error);
          displayError('Error fetching location suggestions: ' + error.message);
        } finally {
          setLoading(false);
        }
      }, 300)
    );

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = input.value.trim();
      console.log('index.js: Form submitted with query:', query);
      if (!query) {
        console.error('index.js: Empty query submitted');
        displayError('Please enter a location');
        return;
      }

      try {
        setLoading(true);
        const location = await getSelectedLocation(query);
        if (!location) {
          console.error('index.js: Invalid location:', query);
          throw new Error('Invalid location');
        }
        console.log('index.js: Location selected:', location);

        const weatherData = await fetchWeatherData(
          location.latitude,
          location.longitude
        );
        console.log('index.js: Weather data received:', weatherData);
        await displayWeather(weatherData);
      } catch (error) {
        console.error('index.js: Weather fetch error:', error);
        displayError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    });

    // Temperature toggle
    toggleBtn.addEventListener('click', () => {
      console.log('index.js: Temperature unit toggle clicked');
      try {
        toggleTempUnit();
        const hourlyData =
          document.getElementById('hourly-data').dataset.hourly;
        const dailyData = document.getElementById('daily-data').dataset.daily;
        if (hourlyData && dailyData) {
          console.log('index.js: Re-displaying weather with new unit');
          displayWeather({
            hourly: JSON.parse(hourlyData),
            daily: JSON.parse(dailyData),
          });
        } else {
          console.warn('index.js: No weather data to toggle');
        }
      } catch (error) {
        console.error('index.js: Toggle error:', error);
      }
    });

    function displaySuggestions(suggestions) {
      try {
        const suggestionsDiv = document.getElementById(
          'autocomplete-suggestions'
        );
        if (!suggestionsDiv) {
          console.error(
            'index.js: Suggestions div #autocomplete-suggestions not found'
          );
          return;
        }
        console.log('index.js: Displaying suggestions:', suggestions);
        suggestionsDiv.innerHTML = '';
        suggestions.forEach((s) => {
          const div = document.createElement('div');
          div.textContent = `${s.name}, ${s.admin1 || ''}, ${s.country}`;
          div.classList.add('suggestion');
          div.addEventListener('click', () => {
            console.log('index.js: Suggestion clicked:', s.name);
            input.value = s.name;
            suggestionsDiv.innerHTML = '';
          });
          suggestionsDiv.appendChild(div);
        });
      } catch (error) {
        console.error('index.js: displaySuggestions error:', error);
      }
    }
  });
} catch (error) {
  console.error('index.js: Initialization error:', error);
}
