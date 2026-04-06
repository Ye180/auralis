import heroImage from "@/assets/bg-hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div
			className="min-h-[95vh] min-w-screen bg-amber-700 overflow-hidden left-0 flex justify-center items-start max-md:items-center lg:pt-40 overflow-y-hidden relative"
			style={{
				backgroundImage: `url(${heroImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="bg-black w-full h-full absolute left-0 top-0 opacity-20 z-10"></div>
			<div className="space-y-8 flex flex-col items-center z-30">
				<div className="text-white text-center text-6xl">
					<span className="font-nunito-sans drop-shadow-xs tracking-tight">
						Understand Where are you
					</span>
					<br />
					<span className="font-playfair italic drop-shadow-xs tracking-tight">
						Analyze, reflect, and move forward
					</span>
				</div>
				<div className="text-white text-center text-lg w-lg drop-shadow-xs">
					Auralis is an AI copilot that transforms complex data into clear
					actionable insights for modern teams.
				</div>
				<div className="text-white text-center text-lg">
					<Button className="bg-white text-black px-4 py-2" icon>
						Start your practice
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
