import { NavItem } from "@/mockups/navbar";

const NavHeader = () => {
	return (
		<nav className="glass-card flex gap-6">
			{NavItem.map((item) => (
				<a key={item.href} href={item.href}>
					{item.name}
				</a>
			))}
		</nav>
	);
};

export default NavHeader;
