import { Link } from "react-router-dom"; // Assuming you use react-router

export default function Navbar() {
	return (
		<nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
			{/* Logo now acts as "Home" */}
			<Link
				to="/"
				className="font-bold text-xl text-blue-600 hover:opacity-80 transition"
			>
				🚌 Udhëto-Al
			</Link>

			<div className="space-x-4">
				<Link
					to="/map-view"
					className="text-gray-700 font-medium hover:text-blue-600 transition"
				>
					MapView
				</Link>
			</div>
		</nav>
	);
}
