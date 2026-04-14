import { cn } from "@/lib/utils";

export type CardProps = {
	item: {
		title: string;
		description: string;
		image: string;
	};
	style?: React.CSSProperties;
	className?: string;
	sizeCard?: string;
};

const Card = ({ item, style, className, sizeCard }: CardProps) => {
	return (
		<div
			className={cn(
				"absolute transition-all duration-500 ease-in-out",
				className,
			)}
			style={style}
		>
			<div
				className={cn(
					"w-56 h-72 rounded-2xl border-none outline-none overflow-hidden shadow-lg relative ",
					sizeCard,
				)}
			>
				<img
					src={item.image}
					alt={item.title}
					className="absolute inset-0 w-full h-full object-cover"
					loading="lazy"
					decoding="async"
					width={400}
					height={500}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-white from-17% to-transparent to-60%" />
				<div className="absolute bottom-4 left-0 px-4 text-black space-y-1">
					<h3 className="text-xl font-playfair italic font-semibold">
						{item.title}
					</h3>
					<p className="text-[13px] text-black/60">{item.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
