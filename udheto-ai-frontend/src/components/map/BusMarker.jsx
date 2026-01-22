import { useEffect, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const busIcon = new L.Icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61231.png",
	iconSize: [40, 40],
});

export default function BusMarker({ route, busData }) {
	const [busPos, setBusPos] = useState([busData.lat, busData.lng]);
	const indexRef = useRef(0);
	const progressRef = useRef(0);

	useEffect(() => {
		const speed = 0.002; // fraction per frame
		const interval = setInterval(() => {
			if (!route || route.length < 2) return;

			let from = route[indexRef.current];
			let to = route[indexRef.current + 1];

			progressRef.current += speed;
			if (progressRef.current >= 1) {
				progressRef.current = 0;
				indexRef.current++;
				if (indexRef.current >= route.length - 1) indexRef.current = 0;
				from = route[indexRef.current];
				to = route[indexRef.current + 1];
			}

			const lat = from[0] + (to[0] - from[0]) * progressRef.current;
			const lng = from[1] + (to[1] - from[1]) * progressRef.current;
			setBusPos([lat, lng]);
		}, 50);

		return () => clearInterval(interval);
	}, [route]);

	return (
		<Marker position={busPos} icon={busIcon}>
			<Popup>
				<div>
					<strong>{busData.nextStop}</strong>
					<br />
					ETA: {busData.eta}
					<br />
					Fullness: {busData.fullness}
				</div>
			</Popup>
		</Marker>
	);
}
