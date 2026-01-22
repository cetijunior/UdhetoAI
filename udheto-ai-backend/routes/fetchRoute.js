const axios = require("axios");

/**
 * Fetch route from OSRM
 * @param {string} start - "lng,lat"
 * @param {string} end - "lng,lat"
 * @returns Array of [lat, lng]
 */
async function getOSRMRoute(start, end) {
  const url = `http://router.project-osrm.org/route/v1/driving/${start};${end}?overview=full&geometries=geojson`;

  try {
    const response = await axios.get(url);
    const coords = response.data.routes[0].geometry.coordinates;
    // Convert [lng, lat] → [lat, lng] for Leaflet & backend simulation
    return coords.map(([lng, lat]) => [lat, lng]);
  } catch (err) {
    console.error("OSRM Error:", err.message);
    return [];
  }
}

module.exports = getOSRMRoute;
