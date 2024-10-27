import CustomLink from "@/components/CustomLink";
import Project from "@/components/Project";
import { getAllBlogs } from "@/lib/blog";
import Projects from "@/utils/Projects";
import { BriefcaseBusiness, MapPin } from "lucide-react";

const Home = () => {
	const blogs = getAllBlogs();

	return (
		<main className="container max-w-3xl my-10 flex flex-col gap-10">
			<h1 className="text-2xl font-bold tracking-tighter">Nikhil Thorat.</h1>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<MapPin strokeWidth={1} className="size-5" />
					<span className="text-base">Pune, India</span>
				</div>
				<div className="flex items-center gap-2">
					<BriefcaseBusiness strokeWidth={1} className="size-5" />
					<span className="text-base">Freelancer</span>
				</div>
			</div>
			<div className="flex flex-col gap-4 text-base font-normal text-pretty">
				<p>
					Hi, I’m Nikhil recently graduate with a bachelor’s degree in Computer
					applications. I love Designing and Building applications for the Web.
					I started my coding journey with Python it taught me how to write
					code, Typescript taught me importance of types and how to swear, Go
					taught me patience.
				</p>
				<p>
					Apart from writing code, I like spending my time playing Guitar and
					Chess. When I get bored I scroll through Dribbble or Behance for
					getting inspired by Art and Design.
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="text-xl font-medium">Projects</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{Projects.map((project, key) => {
						return <Project {...project} key={key} />;
					})}
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="text-xl font-medium">Blogs</h1>
				<div className="flex flex-col gap-4">
					{blogs.length == 0 && <p className="text-sm">Coming Soon..!</p>}
					{blogs.map((blog, key) => {
						return (
							<div key={key} className="flex items-center justify-between">
								<CustomLink isTargetBlank={false} href={"/blogs/" + blog.slug}>
									{blog.title}
								</CustomLink>
								<span className="text-sm">{blog.date}</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="text-xl font-medium">Links</h1>
				<div className="flex items-center gap-5">
					<CustomLink
						isTargetBlank={true}
						href={"mailto:nikhilthoratofficial@gmail.com"}
					>
						Email
					</CustomLink>
					<CustomLink
						isTargetBlank={true}
						href={"https://github.com/nikhil-thorat"}
					>
						Github
					</CustomLink>
					<CustomLink
						isTargetBlank={true}
						href={"https://x.com/iamnikhilthorat"}
					>
						X
					</CustomLink>
					<CustomLink
						isTargetBlank={true}
						href={"https://www.linkedin.com/in/iamnikhilthorat/"}
					>
						LinkedIn
					</CustomLink>
					<CustomLink isTargetBlank={true} href={"/Resume.pdf"}>
						Resume
					</CustomLink>
				</div>
			</div>
		</main>
	);
};

export default Home;
