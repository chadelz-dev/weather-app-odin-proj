let celsius = true;

export function toggleTempUnit() {
  try {
    console.log('utils.js: Toggling temperature unit, current:', celsius);
    celsius = !celsius;
    console.log('utils.js: New unit:', celsius ? 'Celsius' : 'Fahrenheit');
  } catch (error) {
    console.error('utils.js: toggleTempUnit error:', error);
  }
}

export function isCelsius() {
  try {
    console.log('utils.js: Checking unit, isCelsius:', celsius);
    return celsius;
  } catch (error) {
    console.error('utils.js: isCelsius error:', error);
    return true;
  }
}
