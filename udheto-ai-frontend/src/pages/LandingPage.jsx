import HeroSection from "./landing/HeroSection.jsx";
import FeaturesSection from "./landing/FeaturesSection.jsx";
import FAQSection from "./landing/FAQSection.jsx";

export default function LandingPage() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<FeaturesSection />
			<FAQSection />
		</div>
	);
}
