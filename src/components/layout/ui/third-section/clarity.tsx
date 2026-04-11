import thirdPartImage from "@/assets/img-card-1.jpg";
import { Slider } from "@/components/ui/slider";
import { ChartAreaDefault } from "./chart";

const ClaritySection = () => {
	return (
		<div className="flex lg:max-w-5xl mx-auto w-full gap-4 max-md:flex-col md:gap-6  px-4">
			<div className="md:w-3/5 w-full">
				<ChartAreaDefault />
			</div>
			<div className="md:w-2/5 w-full grid grid-rows-2 gap-6">
				<div
					className=" h-full rounded-2xl flex flex-col text-start justify-end p-6 space-y-2 relative blackoverflow-hidden overflow-hidden"
					style={{
						backgroundImage: `url(${thirdPartImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="absolute inset-0 bg-black/20 w-full h-full"></div>
					<h3 className="font-playfair italic text-2xl text-white relative z-10">
						Designed around people
					</h3>
					<p className="text-white relative text-sm z-10">
						Everything you need to think clearly and move faster Everything you
						need to think clearly and move faster
					</p>
				</div>
				<div className="backdrop-blur-sm bg-[#ffffff1a] rounded-3xl text-start justify-end p-6 space-y-6 relative overflow-hidden border border-primary-white/40 ">
					<div className="space-y-2">
						<h3 className="font-playfair italic text-2xl text-white relative z-10">
							Adaptive reasoning
						</h3>
						<p className="text-white text-sm relative z-10">
							Ai adjusts reasoninng depth based on context and task complexity
						</p>
					</div>

					<Slider defaultValue={[75]} max={100} step={1} className=" w-full " />
				</div>
			</div>
		</div>
	);
};

export default ClaritySection;
