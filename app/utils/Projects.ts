export interface IProject {
	title: string;
	description: string;
	github: string;
}

const Projects: IProject[] = [
	{
		title: "Goauth",
		description:
			"Created a api server for handling user authentication with email verification while learning Golang.",
		github: "https://github.com/nikhil-thorat/goauth",
	},
	{
		title: "Notable",
		description:
			"Developed a zenful desktop application for taking notes in markdown syntax using Electron framework.",
		github: "https://github.com/nikhil-thorat/Notable",
	},
	{
		title: "Promptnation",
		description:
			"Made a platform for prompt engineers for exploring and sharing AI prompts with integrated AI chat bot.",
		github: "https://github.com/nikhil-thorat/prompt-nation",
	},
	{
		title: "PaperPilot",
		description: "Developed an Arcade style 2d game with Python and Pygame.",
		github: "https://github.com/nikhil-thorat/PaperPilot",
	},
];

export default Projects;
