import LandingPage from "./pages/LandingPage";
import MapViewPage from "./pages/MapViewPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen bg-gray-100">
				<Navbar />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/map-view" element={<MapViewPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}
