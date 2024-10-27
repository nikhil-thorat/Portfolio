import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
	return (
		<header className="container max-w-3xl w-full flex items-center justify-between">
			<Link href={"/"}>
				<Image src={"/Logo.svg"} alt="Nikhil Thorat." width={20} height={20} />
			</Link>
			<ThemeToggle />
		</header>
	);
};

export default Header;
