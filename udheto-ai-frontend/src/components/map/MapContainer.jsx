import { MapContainer as LeafletMap, TileLayer, Polyline } from "react-leaflet";
import BusMarker from "./BusMarker";
import StationMarker from "./StationMarker";

export default function MapContainer({ busData, routeCoords, stations }) {
	return (
		<LeafletMap
			center={[41.316, 19.445]}
			zoom={15}
			className="h-full w-full rounded-md shadow-lg"
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{routeCoords.length > 0 && (
				<Polyline
					positions={routeCoords}
					pathOptions={{ color: "green", weight: 4, opacity: 0.7 }}
				/>
			)}
			{stations.map((s) => (
				<StationMarker key={s.id} station={s} />
			))}
			{busData && routeCoords.length > 0 && (
				<BusMarker route={routeCoords} busData={busData} />
			)}
		</LeafletMap>
	);
}
