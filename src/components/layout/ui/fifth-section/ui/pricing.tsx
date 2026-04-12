import StarIcon from "@/assets/icons/star.icons";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import type { FiveSectionItemProps } from "@/mockups/five-section";

const Pricing = ({ item }: { item: FiveSectionItemProps }) => {
	return (
		<div
			className={`flex flex-col justify-between gap-4 ${item.transparent ? "bg-[#ffffff1a] backdrop-blur-xs" : "bg-primary-white"} rounded-4xl border ${item.transparent ? "border-primary-white" : "border-primary-white/30"} w-full sm:w-80 p-5 sm:p-6 h-auto sm:h-110`}
		>
			<div className="bg-gray-500/10 size-fit rounded-3xl px-3 py-2 text-xs text-text backdrop-blur-xs">
				{" "}
				{item.type}
			</div>
			<div className="font-semibold font-nunito-sans text-2xl text-start">
				<span className="">{formatCurrency(item.price)}</span>{" "}
				<span className="text-sm font-medium text-text ">{item.period}</span>
			</div>

			<div className="h-px bg-border/40" />
			{/* FCFA */}
			<div className="space-y-2">
				{/* {} */}
				{item.features.map((feature: string) => (
					<div className="flex items-center gap-2 text-heading/50">
						<span className="text-heading/50">
							<StarIcon />
						</span>
						<span className="font-medium text-heading/80 text-md">
							{feature}
						</span>
					</div>
				))}
			</div>
			<Button
				icon={true}
				transparent={item.transparent}
				className={cn(
					"bg-primary-white text-black py-3",
					!item.transparent && "bg-primary-black text-white",
				)}
			>
				Get Started
			</Button>
		</div>
	);
};

export default Pricing;
