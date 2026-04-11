import thirdPartImage from "@/assets/background-2.jpg";
import ClaritySection from "../ui/third-section/clarity";

const ThirdPart = () => {
	return (
		<div className="min-h-screen justify-start items-center py-16 flex flex-col space-y-4 px-4 rounded-2xl! overflow-hidden!">
			<div className="md:h-[80vh] h-[150vh] w-full overflow-hidden relative rounded-3xl">
				<img
					src={thirdPartImage}
					alt="Third Part"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-transparent from-35% to-white to-90%" />
				<div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-50 text-center  w-full space-y-24">
					<div className="flex flex-col items-center ">
						<h2 className="text-2xl lg:text-4xl font-semibold text-center leading-tight whitespace-nowrap">
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
			</div>
		</div>
	);
};

export default ThirdPart;
