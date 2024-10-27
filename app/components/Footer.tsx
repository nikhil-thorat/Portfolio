import { Copyright } from "lucide-react";
import CustomLink from "./CustomLink";

const Footer = () => {
	return (
		<footer className="container max-w-3xl flex items-start justify-between text-sm">
			<p className="flex flex-row items-center gap-2">
				<span>
					<Copyright strokeWidth={1} className="size-4" />
				</span>{" "}
				Nikhil Thorat
			</p>
			<CustomLink
				isTargetBlank={true}
				href={"https://github.com/nikhil-thorat/portfolio/tree/next-migration"}
			>
				View source
			</CustomLink>
		</footer>
	);
};

export default Footer;
