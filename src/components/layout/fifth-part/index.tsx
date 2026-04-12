import fifthImage from "@/assets/five-2.jpg";
import LayoutFifth from "../ui/fifth-section/layout";

const FifthPart = () => {
	return (
		<div className="min-h-screen justify-start items-center py-8 flex flex-col space-y-4 px-2 md:px-4 bg-white">
			<div
				className="min-h-screen w-full overflow-hidden relative rounded-3xl"
				style={{
					backgroundImage: `url(${fifthImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-linear-to-t from-transparent from-35% to-white to-90%" />
				<LayoutFifth />
			</div>
		</div>
	);
};

export default FifthPart;
