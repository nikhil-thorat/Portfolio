import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlobalProviders from "@/providers/GlobalProviders";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import localFont from "next/font/local";

const Satoshi = localFont({
	src: "../public/font/Satoshi-Variable.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Nikhil Thorat - Software Developer",
		template: "%s | Nikhil Thorat",
	},
	description:
		"A Software developer based in Pune, India. Specializing in web development",
	keywords: [
		"Nikhil Thorat",
		"Software Developer",
		"Web Developer",
		"React Developer",
		"Portfolio",
		"Pune",
		"India",
	],
	authors: [{ name: "Nikhil Thorat" }],
	creator: "Nikhil Thorat",
	publisher: "Nikhil Thorat",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://iamnikhilthorat.vercel.app",
		siteName: "Nikhil Thorat",
		title: "Nikhil Thorat - Software Developer",
		description:
			"A Software developer based in Pune, India. Specializing in web development",
	},
	icons: {
		icon: "Logo.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<body
				className={`${Satoshi.className} antialiased px-4 py-4 md:py-10 text-neutral-950 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-950`}
			>
				<GlobalProviders>
					<Header />
					{children}
					<Footer />
				</GlobalProviders>
				<Analytics />
			</body>
		</html>
	);
}
