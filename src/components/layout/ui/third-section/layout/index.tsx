import { cn } from "@/lib/utils";
import ClaritySection from "../ui/clarity";

const LayoutThird = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"relative z-50 text-center w-full space-y-8 md:space-y-16 py-8 md:py-16 px-4",
				className,
			)}
		>
			<div className="flex flex-col items-center ">
				<h2 className="text-2xl lg:text-4xl font-semibold text-center leading-tight">
					<span> Conçu pour soutenir </span>
					<span className="text-primary-blue font-playfair  italic">
						chaque décision
					</span>
				</h2>
				<p className="font-semibold">
					De la planification stratégique aux opérations quotidiennes, Auralis
					te fournit les outils et les insights dont tu as besoin pour prendre
					des décisions éclairées.
				</p>
			</div>
			<ClaritySection />
		</div>
	);
};

export default LayoutThird;
