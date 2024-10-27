import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = () => {
	const slugs = getBlogSlugs();
	return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const blog = await getBlogBySlug(params.slug);

	const description =
		blog.content
			.split("\n")
			.find((para) => para.length > 0)
			?.slice(0, 150) || "";

	return {
		title: `${blog.title} | Nikhil Thorat`,
		description,
		openGraph: {
			title: blog.title,
			description,
			type: "article",
			publishedTime: blog.date,
			url: `https://iamnikhilthorat.vercel.app/blogs/${params.slug}`,
		},
		authors: [{ name: "Nikhil Thorat" }],
	};
};

const Blog = async ({ params }: Props) => {
	const blog = await getBlogBySlug(params.slug);

	return (
		<article className="container max-w-3xl my-10 min-h-screen h-auto flex flex-col gap-4">
			<h1 className="text-4xl font-semibold tracking-tight">{blog.title}</h1>
			<span>{blog.date}</span>
			<main className="prose prose-neutral dark:prose-invert prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-800">
				<Markdown>{blog.content}</Markdown>
			</main>
		</article>
	);
};

export default Blog;
