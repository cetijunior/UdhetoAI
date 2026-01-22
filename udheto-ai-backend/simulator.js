const stations = require("./stations/currila.json");
const { distanceInMeters } = require("./utils/geo");
const getOSRMRoute = require("./routes/fetchRoute");

let route = [];

async function initRoute() {
  // UAMD Currila → Durrës Terminal
  route = await getOSRMRoute("19.4471,41.3189", "19.4443,41.3132");
  if (!route || route.length === 0) {
    console.log("Using fallback static route");
    route = require("./routes/staticRoutes/currila.json");
  }
}

module.exports = async function startSimulation(io) {
  await initRoute();
  console.log(`🚦 Bus simulation starting along OSRM route (${route.length} points)`);

  let index = 0;
  let direction = 1;
  let speed = 22; // km/h
  let fullness = "medium";

  setInterval(() => {
    const [lat, lng] = route[index];

    // Detect nearest station
    let nextStop = null;
    let eta = null;
    for (const station of stations) {
      const dist = distanceInMeters(lat, lng, station.lat, station.lng);
      if (dist < station.radius) {
        nextStop = station.name;
        eta = "Arriving";
        break;
      }
    }
    if (!nextStop) {
      nextStop = stations[0].name;
      eta = "3–6 min";
    }

    io.to("currila").emit("bus_update", {
      lineId: "currila",
      lat,
      lng,
      speed,
      nextStop,
      eta,
      fullness,
      timestamp: Date.now(),
    });

    // Move bus along route
    index += direction;
    if (index >= route.length - 1 || index <= 0) direction *= -1;

    // Random traffic effect
    if (Math.random() < 0.1) speed = Math.max(10, speed - 5);
    else speed = Math.min(30, speed + 1);

  }, 2000);
};
