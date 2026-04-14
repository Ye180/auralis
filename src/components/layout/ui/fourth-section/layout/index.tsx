import StarIcon from "@/assets/icons/star.icons";
import ItemsFouthSection from "@/mockups/fourth-section";
import Card from "../../second-section/ui/card";

const LayoutFourth = () => {
	return (
		<div className="  w-full space-y-12 ">
			<div className="w-full justify-start items-center flex flex-col space-y-4 ">
				<div className="flex items-center gap-2 bg-muted w-fit rounded-full px-4 py-2">
					<span>
						<StarIcon />
					</span>
					<p className="text-sm font-normal bg-glassmorphic">
						Intelligence & expertise
					</p>
				</div>
				<div className="space-y-3">
					<h2 className="text-2xl lg:text-4xl  font-semibold text-center leading-tight">
						<span> Designed to support </span>

						<span className="text-primary-blue font-playfair  italic">
							every decision
						</span>
					</h2>

					<p className="text-center text-sm text-muted-foreground">
						From strategic planning to day-to-day operations, Auralis provides
						the tools and insights you need to make confident decisions.
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 container mx-auto px-4">
				{ItemsFouthSection.map((item, index) => (
					<Card
						className="static h-full"
						sizeCard="w-full! h-72 sm:h-80 lg:h-96"
						item={item}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default LayoutFourth;
