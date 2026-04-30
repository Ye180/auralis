import { cn } from "@/lib/utils";
import ItemsFiveSection from "@/mockups/five-section";
import Pricing from "../ui/pricing";

const LayoutFifth = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"relative z-50 text-center w-full space-y-8 md:space-y-16 py-8 md:py-16 px-4",
				className,
			)}
		>
			<div className="flex flex-col items-center space-y-3">
				<h2 className="text-2xl lg:text-4xl font-semibold text-center leading-tight">
					<span>Une expérience qui </span>
					<span className="text-primary-blue font-playfair italic">
						grandit avec toi
					</span>
				</h2>
				<p className="font-semibold text-sm md:text-base">
					Deux formules pensées pour t'accompagner dans ta reconnexion avec la
					nature
				</p>
			</div>
			<div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-8">
				{ItemsFiveSection.map((item) => (
					<Pricing key={item.type} item={item} />
				))}
			</div>
		</div>
	);
};

export default LayoutFifth;
