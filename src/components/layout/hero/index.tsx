import heroImage from "@/assets/bg-hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div className="min-h-[95vh] min-w-screen  overflow-hidden left-0 flex justify-center items-start max-md:items-center pt-10 md:pt-40 overflow-y-hidden relative">
			<img
				src={heroImage}
				alt="Auralis AI analytics dashboard - data visualization"
				className="absolute inset-0 w-full h-full object-cover"
				fetchPriority="high"
				width={1920}
				height={1080}
			/>
			<div className="bg-black w-full h-full absolute left-0 top-0 opacity-40 z-10"></div>
			<div className="space-y-8 flex flex-col items-center z-30 ">
				<h1 className="text-white text-center md:text-4xl lg:text-6xl text-2xl ">
					<span className="font-nunito-sans drop-shadow-xs tracking-tight ">
						Understand Where are you
					</span>
					<br />
					<span className="font-playfair italic drop-shadow-xs tracking-tight">
						Analyze, reflect, and move forward
					</span>
				</h1>
				<div className="text-white text-center text-sm md:text-lg w-full md:w-lg drop-shadow-xs">
					Auralis is an AI copilot that transforms complex data into clear
					actionable insights for modern teams.
				</div>
				<div className="text-white text-center text-lg">
					<Button
						className="bg-white text-black px-6 py-3 text-base md:text-lg"
						icon
					>
						Start your practice
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
