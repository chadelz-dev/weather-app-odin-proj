export async function getLocationSuggestions(query) {
  try {
    console.log('search.js: Fetching suggestions for query:', query);
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      query
    )}&count=5`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error('search.js: Fetch failed with status:', response.status);
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    console.log('search.js: Suggestions data:', data);
    return data.results || [];
  } catch (error) {
    console.error('search.js: getLocationSuggestions error:', error);
    throw error;
  }
}

export async function getSelectedLocation(query) {
  try {
    console.log('search.js: Getting location for query:', query);
    const suggestions = await getLocationSuggestions(query);
    const location = suggestions.find(
      (s) => s.name.toLowerCase() === query.toLowerCase()
    );
    if (!location) {
      console.error('search.js: No matching location for:', query);
      return null;
    }
    console.log('search.js: Selected location:', location);
    return {
      name: location.name,
      latitude: location.latitude,
      longitude: location.longitude,
      admin1: location.admin1,
      country: location.country,
    };
  } catch (error) {
    console.error('search.js: getSelectedLocation error:', error);
    throw error;
  }
}
