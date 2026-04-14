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
					<span> Built for clarity at </span>
					<span className="text-primary-blue font-playfair  italic">
						every step
					</span>
				</h2>
				<p className="font-semibold">
					Everything you need to think clearly and move faster
				</p>
			</div>
			<ClaritySection />
		</div>
	);
};

export default LayoutThird;
