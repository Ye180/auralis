import NavHeader from "../ui/nav-header";

const Header = () => {
	return (
		<div className="absolute top-4 left-0 right-0 w-full z-30">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="text-white">Logo</div>
					<div className="max-md:hidden text-white">
						<NavHeader />
					</div>
					<div className="text-white glass-card">Sign Up</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
