import { ThemeProvider } from "next-themes";

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
};

export default GlobalProviders;
