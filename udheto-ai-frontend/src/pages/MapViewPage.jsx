import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapContainer from "../components/map/MapContainer";
import Sidebar from "../components/layout/Sidebar";
import BottomPanel from "../components/mobile/BottomPanel";
import useWindowWidth from "../utils/useWindowWidth";

export default function MapViewPage() {
	const width = useWindowWidth();
	const isMobile = width < 768;

	const [busData, setBusData] = useState(null);
	const [routeCoords, setRouteCoords] = useState([]);
	const [stations] = useState([
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
		// Connect to backend
		const socket = io("http://localhost:3001");

		socket.emit("join_line", { lineId: "currila" });

		socket.on("bus_update", (data) => {
			setBusData(data);

			// Add new position to the trail if it's different from the last point
			setRouteCoords((prev) => {
				const lastCoord = prev[prev.length - 1];
				if (
					!lastCoord ||
					lastCoord[0] !== data.lat ||
					lastCoord[1] !== data.lng
				) {
					return [...prev, [data.lat, data.lng]];
				}
				return prev;
			});
		});

		return () => {
			socket.off("bus_update");
			socket.disconnect();
		};
	}, []);

	return (
		<div className="flex flex-1 md:flex-row flex-col h-[calc(100vh-64px)]">
			{/* Map Section */}
			<div className={isMobile ? "flex-1 relative" : "flex-4 relative"}>
				<MapContainer
					busData={busData}
					routeCoords={routeCoords}
					stations={stations}
				/>
			</div>

			{/* Desktop Sidebar - Shows live info about the bus */}
			{!isMobile && busData && <Sidebar busData={busData} />}

			{/* Mobile Bottom Panel - Slides up for mobile users */}
			{isMobile && busData && <BottomPanel busData={busData} />}
		</div>
	);
}
