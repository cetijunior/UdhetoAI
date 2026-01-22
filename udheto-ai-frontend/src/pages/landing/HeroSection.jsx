export default function HeroSection() {
	return (
		<section className="bg-blue-600 text-white px-6 py-20 md:py-32">
			<div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
				{/* Text */}
				<div className="flex-1">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Udhëto-Al: Your Smart Bus Companion
					</h1>
					<p className="text-lg md:text-xl mb-6">
						Know where your bus is in real-time, reduce wait times, and travel
						smart across Durrës.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<a
							href="/map-view"
							className="bg-yellow-400 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition text-center"
						>
							Open App
						</a>
						<a
							href="#features"
							className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition text-center"
						>
							Learn More
						</a>
					</div>
				</div>

				{/* Image */}
				<div className="flex-1">
					<img
						src="https://cdn-icons-png.flaticon.com/512/61/61231.png"
						alt="Bus Illustration"
						className="w-full max-w-md mx-auto"
					/>
				</div>
			</div>
		</section>
	);
}
