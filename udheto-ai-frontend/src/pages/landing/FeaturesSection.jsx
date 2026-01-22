const features = [
	{
		title: "Real-Time Bus Tracking",
		description:
			"See exactly where your bus is on the map, so you never wait blindly.",
		icon: "https://cdn-icons-png.flaticon.com/512/3178/3178192.png",
	},
	{
		title: "Accessibility Friendly",
		description: "Signal stops for users with wheelchairs or limited mobility.",
		icon: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
	},
	{
		title: "Crowdsourced Insights",
		description:
			"Passengers help report bus fullness and delays to improve city transit.",
		icon: "https://cdn-icons-png.flaticon.com/512/609/609803.png",
	},
];

export default function FeaturesSection() {
	return (
		<section id="features" className="px-6 py-20 md:py-32 bg-gray-50">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-700">
					Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{features.map((feature, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
						>
							<img
								src={feature.icon}
								alt={feature.title}
								className="w-16 h-16 mb-4 mx-auto"
							/>
							<h3 className="font-bold text-xl mb-2">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
