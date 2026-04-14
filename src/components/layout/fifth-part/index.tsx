import fifthImage from "@/assets/five-2.jpg";
import LayoutFifth from "../ui/fifth-section/layout";

const FifthPart = () => {
	return (
		<section className="min-h-screen justify-start items-center py-8 flex flex-col space-y-4 px-2 md:px-4 bg-white">
			<div className="min-h-screen w-full overflow-hidden relative rounded-3xl">
				<img
					src={fifthImage}
					className="absolute inset-0 w-full h-full object-cover"
					loading="lazy"
					decoding="async"
					alt="Auralis pricing plans background"
					width={1920}
					height={1080}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-transparent from-35% to-white to-90%" />
				<LayoutFifth />
			</div>
		</section>
	);
};

export default FifthPart;
