import FifthPart from "@/components/layout/fifth-part";
import Footer from "@/components/layout/footer";
import FourthPart from "@/components/layout/fourth-part";
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
			<FourthPart />
			<FifthPart />
			<Footer />
		</div>
	);
};

export default Home;
