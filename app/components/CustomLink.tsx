import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CustomLink = ({
	href,
	isTargetBlank,
	children,
}: {
	href: string;
	isTargetBlank: boolean;
	children: React.ReactNode;
}) => {
	return (
		<Link
			href={href}
			target={isTargetBlank ? "_blank" : ""}
			className="flex items-end justify-center gap-1 group"
		>
			<div className="flex flex-col">
				{children}
				<span className="h-[2px] bg-black dark:bg-white  w-0 group-hover:w-full origin-left transition-all" />
			</div>
			<div className="w-fit h-fit overflow-hidden">
				<ArrowUpRight
					strokeWidth={1}
					className="size-5 translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
				/>
			</div>
		</Link>
	);
};

export default CustomLink;
