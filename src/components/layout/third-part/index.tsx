import thirdPartImage from "@/assets/background-2.jpg";
import LayoutThird from "../ui/third-section/layout";

const ThirdPart = () => {
	return (
		<div className="min-h-screen justify-start items-center py-8 flex flex-col space-y-4 px-2 md:px-4 rounded-2xl! bg-white overflow-hidden!">
			<div className="md:h-[80vh] f w-full overflow-hidden relative rounded-3xl">
				<img
					src={thirdPartImage}
					alt="Third Part"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-transparent from-35% to-white to-90%" />
				<LayoutThird className="h-[calc(100%-4rem)]" />
			</div>
		</div>
	);
};

export default ThirdPart;
