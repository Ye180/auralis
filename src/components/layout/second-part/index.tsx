import StarIcon from "@/assets/icons/star.icons";
import CardFirst from "../ui/second-section/layout/card-first";

const SecondPart = () => {
	return (
		<section className=" justify-start items-center flex flex-col space-y-10 pt-12 ">
			<div className="flex items-center gap-2 bg-muted w-fit rounded-full px-4 py-2">
				<span>
					<StarIcon />
				</span>
				<p className="text-sm font-normal bg-glassmorphic">
					How the Auralis works
				</p>
			</div>

			<h2 className="text-2xl lg:text-4xl  font-semibold text-center leading-tight">
				<span> From information to insight </span>
				<br />
				<span className="text-primary-blue font-playfair  italic">
					effortlessly
				</span>
			</h2>

			<CardFirst />
		</section>
	);
};

export default SecondPart;
