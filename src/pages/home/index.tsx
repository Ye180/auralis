import Header from "@/components/layout/header";
import { default as Hero } from "@/components/layout/hero";
import SecondPart from "@/components/layout/second-part";

const Home = () => {
	return (
		<div className="font-nunito-sans relative ">
			<Header />
			<Hero />
			<SecondPart />
		</div>
	);
};

export default Home;
