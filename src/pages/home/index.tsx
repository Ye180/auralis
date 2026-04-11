import Header from "@/components/layout/header";
import { default as Hero } from "@/components/layout/hero";
import { default as SecondPart } from "@/components/layout/second-part";
import ThirdPart from "@/components/layout/third-part";

const Home = () => {
	return (
		<div className="font-nunito-sans relative ">
			<Header />
			<Hero />
			<SecondPart />
			<ThirdPart />
		</div>
	);
};

export default Home;
