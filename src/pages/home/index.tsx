import Header from "@/components/layout/header";
import { default as Hero } from "@/components/layout/hero";
import { lazy, Suspense } from "react";

const SecondPart = lazy(() => import("@/components/layout/second-part"));
const ThirdPart = lazy(() => import("@/components/layout/third-part"));
const FourthPart = lazy(() => import("@/components/layout/fourth-part"));
const FifthPart = lazy(() => import("@/components/layout/fifth-part"));
const Footer = lazy(() => import("@/components/layout/footer"));

const Home = () => {
	return (
		<main className="font-nunito-sans relative ">
			<Header />
			<Hero />
			<Suspense fallback={null}>
				<SecondPart />
				<ThirdPart />
				<FourthPart />
				<FifthPart />
				<Footer />
			</Suspense>
		</main>
	);
};

export default Home;
