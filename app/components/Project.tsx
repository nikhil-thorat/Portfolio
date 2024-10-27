import { IProject } from "@/utils/Projects";
import CustomLink from "./CustomLink";

const Project = (props: IProject) => {
	return (
		<div className="flex flex-col gap-1">
			<span className="w-fit">
				<CustomLink isTargetBlank={true} href={props.github}>
					{props.title}
				</CustomLink>
			</span>
			<p>{props.description}</p>
		</div>
	);
};

export default Project;
