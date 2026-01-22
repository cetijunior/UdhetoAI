import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { io } from "socket.io-client";
import BusMarker from "./map/BusMarker";
import StationMarker from "./map/StationMarker";
import BottomPanel from "./mobile/BottomPanel";
import useWindowWidth from "../utils/useWindowWidth";

export default function MapView() {
	const width = useWindowWidth();
	const isMobile = width < 768;

	const [busData, setBusData] = useState(null);
	const [routeCoords, setRouteCoords] = useState([]);
	const [stations, setStations] = useState([
		{
			id: "currila_uni",
			name: "UAMD Currila Campus",
			lat: 41.3189,
			lng: 19.4471,
			radius: 60,
		},
		{
			id: "bus_terminal",
			name: "Durrës Bus Terminal",
			lat: 41.3132,
			lng: 19.4443,
			radius: 60,
		},
	]);

	useEffect(() => {
		const socket = io("http://localhost:3001");
		socket.emit("join_line", { lineId: "currila" });

		socket.on("bus_update", (data) => {
			setBusData(data);
			if (routeCoords.length === 0)
				setRouteCoords((prev) => [...prev, [data.lat, data.lng]]);
		});

		return () => socket.disconnect();
	}, []);

	return (
		<div className="h-screen w-screen flex flex-col md:flex-row">
			{/* Map */}
			<div className={isMobile ? "flex-1 relative" : "flex-4 relative"}>
				<MapContainer
					center={[41.316, 19.445]}
					zoom={15}
					className="h-full w-full"
				>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Polyline
						positions={routeCoords}
						pathOptions={{ color: "green", weight: 4 }}
					/>
					{stations.map((s) => (
						<StationMarker key={s.id} station={s} />
					))}
					{busData && routeCoords.length > 0 && (
						<BusMarker route={routeCoords} busData={busData} />
					)}
				</MapContainer>
			</div>

			{/* Desktop info panel */}
			{!isMobile && busData && (
				<div className="flex-1 p-4 bg-white shadow-lg overflow-auto">
					<h2 className="font-bold text-xl mb-2">Bus Info</h2>
					<p>
						<strong>Next Stop:</strong> {busData.nextStop}
					</p>
					<p>
						<strong>ETA:</strong> {busData.eta}
					</p>
					<p>
						<strong>Fullness:</strong> {busData.fullness}
					</p>
					<button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded">
						♿ Accessibility
					</button>
				</div>
			)}

			{/* Mobile bottom panel */}
			{isMobile && busData && <BottomPanel busData={busData} />}
		</div>
	);
}
