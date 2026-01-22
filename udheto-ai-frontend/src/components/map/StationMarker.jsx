import { Marker, Popup, Circle } from "react-leaflet";

export default function StationMarker({ station }) {
	return (
		<>
			<Marker position={[station.lat, station.lng]}>
				<Popup>{station.name}</Popup>
			</Marker>
			<Circle
				center={[station.lat, station.lng]}
				radius={station.radius}
				pathOptions={{ color: "blue", fillOpacity: 0.1 }}
			/>
		</>
	);
}
