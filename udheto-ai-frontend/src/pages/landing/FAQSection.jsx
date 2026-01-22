import React from "react";

const faqs = [
	{
		question: "Does Udhëto-Al support all bus lines in Durrës?",
		answer:
			"Currently we support main university and port lines. More lines will be added based on user demand.",
	},
	{
		question: "Do I need an account to use the app?",
		answer:
			"No account is required for viewing bus locations, but registering allows you to contribute crowdsourced data.",
	},
	{
		question: "Can I signal a stop for accessibility?",
		answer:
			"Yes! Users with limited mobility can signal stops, notifying drivers in real-time.",
	},
];

function FAQSection() {
	// Removed the extra { that was here
	return (
		<section className="px-6 py-20 md:py-32">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-700">
					FAQ
				</h2>
				<div className="space-y-6 text-left">
					{faqs.map((faq, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
						>
							<h3 className="font-semibold text-xl mb-2">{faq.question}</h3>
							<p className="text-gray-600">{faq.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} // Removed the extra } that was here

export default FAQSection;
