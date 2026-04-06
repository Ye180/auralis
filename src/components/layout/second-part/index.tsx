import StarIcon from "@/assets/icons/star.icons";

const SecondPart = () => {
	return (
		<div className="min-h-screen bg-primary-white   justify-start items-center py-16 flex flex-col space-y-10">
			<div className="flex items-center gap-2 bg-muted w-fit rounded-full px-4 py-2">
				<span>
					<StarIcon />
				</span>
				<p className="text-sm font-normal bg-glassmorphic">
					How the Auralis works
				</p>
			</div>

			<h2 className="text-4xl  font-semibold text-center leading-tight">
				<span> From information to insight </span>
				<br />
				<span className="text-primary-blue font-playfair  italic">
					effortlessly
				</span>
			</h2>
		</div>
	);
};

export default SecondPart;
