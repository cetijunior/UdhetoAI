export default function BottomPanel({ busData }) {
	return (
		<div className="absolute bottom-0 w-full bg-white p-4 shadow-lg rounded-t-2xl z-50">
			<div className="flex justify-between items-center">
				<div>
					<div className="font-bold text-lg">{busData.nextStop}</div>
					<div className="text-gray-500">ETA: {busData.eta}</div>
				</div>
				<div className="flex items-center space-x-2">
					<div className="bg-yellow-400 px-3 py-1 rounded-full text-white">
						{busData.fullness}
					</div>
					<button className="bg-blue-600 text-white px-3 py-1 rounded-full">
						♿
					</button>
				</div>
			</div>
		</div>
	);
}
