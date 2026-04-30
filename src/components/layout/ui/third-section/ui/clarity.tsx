import thirdPartImage from "@/assets/img-card-1.jpg";
import { Slider } from "@/components/ui/slider";
import { ChartAreaDefault } from "./chart";

const ClaritySection = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 md:max-w-5xl mx-auto w-full gap-4 md:gap-6  px-4">
			<div className=" w-full">
				<ChartAreaDefault />
			</div>
			<div className=" w-full grid grid-rows-2 gap-6 ">
				<div className="h-full rounded-2xl flex flex-col text-start justify-end p-4 md:p-6 space-y-2 relative overflow-hidden">
					<img
						src={thirdPartImage}
						alt="Team collaboration using Auralis data insights"
						className="absolute inset-0 w-full h-full object-cover"
						loading="lazy"
						decoding="async"
						width={800}
						height={600}
					/>
					<div className="absolute inset-0 bg-black/40 w-full h-full"></div>
					<h3 className="font-playfair italic text-2xl text-white relative z-10">
						Trouve ta paix intérieure.
					</h3>
					<p className="text-white relative text-sm z-10">
						Une immersion au cœur de la nature, là où le temps ralentit et où
						l’esprit s’apaise
					</p>
				</div>
				<div className="backdrop-blur-md bg-black/30 rounded-3xl text-start justify-end p-4 md:p-6 space-y-4 md:space-y-6 relative overflow-hidden border border-primary-white/40">
					<div className="space-y-2">
						<h3 className="font-playfair italic text-2xl text-white relative z-10">
							L’équilibre commence ici
						</h3>
						<p className="text-white text-sm relative z-10">
							Nous créons des expériences qui reconnectent l’humain à la nature,
							au silence et à lui-même.
						</p>
					</div>

					<Slider defaultValue={[75]} max={100} step={1} className=" w-full " />
				</div>
			</div>
		</div>
	);
};

export default ClaritySection;
