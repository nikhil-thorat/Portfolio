"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<button className="w-5 h-5" aria-label="Toggle theme">
				<span className="sr-only">Loading theme toggle</span>
			</button>
		);
	}

	return (
		<button
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			className="w-5 h-5"
			aria-label="Toggle theme"
		>
			{resolvedTheme === "dark" ? (
				<Moon strokeWidth={1} className="w-full h-full" />
			) : (
				<Sun strokeWidth={1} className="w-full h-full" />
			)}
		</button>
	);
};

export default ThemeToggle;
