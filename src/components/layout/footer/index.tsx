const Footer = () => {
	const data = [
		{
			link: "#",
			text: "How it Works",
		},
		{
			link: "#",
			text: "Features",
		},
		{
			link: "#",
			text: "Pricing",
		},
		{
			link: "#",
			text: "Contact",
		},
		{
			link: "#",
			text: "Privacy Policy",
		},
	];

	return (
		<footer className="bg-heading py-10 px-6 flex flex-col items-center gap-8">
			<div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-center">
				{data.map((item, index) => (
					<a
						key={index}
						href={item.link}
						className="text-white/70 hover:text-white text-sm transition-colors"
					>
						{item.text}
					</a>
				))}
			</div>
			<div className="h-px w-full max-w-2xl bg-white/10" />
			<div className="text-white/50 font-playfair text-sm">
				<p>Copyright © 2025 Auralis. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
