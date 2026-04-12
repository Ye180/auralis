import ArrowIcons from "@/components/ui/icons/arrow.icons";
import ItemsSecondSection from "@/mockups/second-section";
import { useEffect, useState } from "react";
import Card from "../ui/card";

const CardFirst = () => {
	const active = Math.floor(ItemsSecondSection.length / 2);
	const [activeIndex, setActiveIndex] = useState(active);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="h-fit w-full relative">
			<div
				id="card-first"
				className="relative flex items-start justify-center h-110 w-full overflow-hidden "
			>
				{ItemsSecondSection.map((item, index) => {
					const offset = index - activeIndex;
					const tx = offset * 150;
					const ty = Math.abs(offset) ** 1.6 * 15;
					const angle = offset * 8;
					const scale = 1 - Math.abs(offset) * 0.06;
					const zIndex = ItemsSecondSection.length - Math.abs(offset);

					const isActive = index === activeIndex;

					return (
						<Card
							item={item}
							style={
								isDesktop
									? {
											transform: `translateX(${tx}px) translateY(${ty}px) rotate(${angle}deg) scale(${scale})`,
											zIndex,
										}
									: {
											transform: `translateX(${offset * 110}%)`,
											opacity: isActive ? 1 : 0,
										}
							}
						/>
					);
				})}
			</div>
			<div className="flex gap-4 h-fit absolute bottom-12 left-1/2 transform -translate-x-1/2">
				<button
					className="text-black rounded-full p-2 transition-colors bg-black cursor-pointer"
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
					className="text-black rounded-full p-2 transition-colors bg-black cursor-pointer"
					onClick={() =>
						setActiveIndex((prev) => (prev + 1) % ItemsSecondSection.length)
					}
				>
					<ArrowIcons className="rotate-90 text-white" />
				</button>
			</div>
		</div>
	);
};

export default CardFirst;
