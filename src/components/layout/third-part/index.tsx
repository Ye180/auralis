import thirdPartImage from "@/assets/background-2.jpg";
import LayoutThird from "../ui/third-section/layout";

const ThirdPart = () => {
	return (
		<section className="min-h-screen justify-start items-center py-8 flex flex-col space-y-4 px-2 md:px-4 rounded-2xl! bg-white overflow-hidden!">
			<div className="min-h-[80vh] w-full overflow-hidden relative rounded-3xl bg-amber-700 ">
				<img
					src={thirdPartImage}
					alt="Third Part"
					className="absolute inset-0 w-full h-full object-cover"
					loading="lazy"
					width={1920}
					height={1080}
					decoding="async"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-transparent from-35% to-white to-90%" />
				<LayoutThird />
			</div>
		</section>
	);
};

export default ThirdPart;
