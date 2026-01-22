export default function Sidebar({ busData }) {
	return (
		<div className="flex-1 p-6 bg-white shadow-lg rounded-l-lg overflow-auto">
			<h2 className="font-bold text-2xl mb-4 text-blue-600">Bus Information</h2>
			<p>
				<span className="font-semibold">Next Stop:</span> {busData.nextStop}
			</p>
			<p>
				<span className="font-semibold">ETA:</span> {busData.eta}
			</p>
			<p>
				<span className="font-semibold">Fullness:</span> {busData.fullness}
			</p>
			<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
				♿ Accessibility
			</button>
		</div>
	);
}
