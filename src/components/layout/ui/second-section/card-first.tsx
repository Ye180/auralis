import ArrowIcons from "@/components/ui/icons/arrow.icons";
import ItemsSecondSection from "@/mockups/second-section";
import { useState } from "react";

const CardFirst = () => {
	const active = Math.floor(ItemsSecondSection.length / 2);

	const [activeIndex, setActiveIndex] = useState(active);

	return (
		<>
			<div className="relative flex items-center justify-center h-80 w-full">
				{ItemsSecondSection.map((item, index) => {
					const offset = index - activeIndex;
					const tx = offset * 150;
					const ty = Math.abs(offset) ** 1.6 * 15;
					const angle = offset * 8;
					const scale = 1 - Math.abs(offset) * 0.06;
					const zIndex = ItemsSecondSection.length - Math.abs(offset);

					return (
						<div
							key={index}
							className="absolute transition-transform transform-zIndex duration-300"
							style={{
								transform: `translateX(${tx}px) translateY(${ty}px) rotate(${angle}deg) scale(${scale})`,
								zIndex,
							}}
						>
							<div
								className="w-56 h-72 rounded-2xl border-none outline-none overflow-hidden shadow-lg relative"
								style={{
									backgroundImage: `url(${item.image})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute inset-0 bg-linear-to-t from-white from-17% to-transparent to-60%" />
								<div className="absolute bottom-4 left-0 px-4 text-black space-y-1">
									<h3 className="text-xl font-playfair italic font-semibold">
										{item.title}
									</h3>
									<p className="text-[13px] text-black/60">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex gap-4">
				<button
					className="text-black rounded-full p-2 transition-colors bg-black"
					onClick={() =>
						setActiveIndex(
							(prev) =>
								(prev - 1 + ItemsSecondSection.length) %
								ItemsSecondSection.length,
						)
					}
				>
					<ArrowIcons className="-rotate-90 text-white " />
				</button>
				<button
					className="text-black rounded-full p-2 transition-colors bg-black"
					onClick={() =>
						setActiveIndex((prev) => (prev + 1) % ItemsSecondSection.length)
					}
				>
					<ArrowIcons className="rotate-90 text-white" />
				</button>
			</div>
			{/* bouton de navigation */}

			<p className="text-black text-sm">Voir plus</p>
		</>
	);
};

export default CardFirst;
