import "@shared/styles.css";
import { LayoutProps } from "@shared/types";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const FONT_BASE = Inter({
	display: "swap",
	subsets: ["cyrillic", "latin"],
	variable: "--font-base",
	weight: ["400", "500", "600", "700"],
});

const FONT_CUSTOM = Poppins({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-custom",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Nikita Tashchilin | Portfolio",
	description:
		"Welcome to my portfolio! I'm Nikita Tashchilin, an experienced software developer with 4 years of experience specializing in creating user-friendly web applications.",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${FONT_BASE.variable} ${FONT_CUSTOM.variable}`}>
				<main className="flex h-screen items-center justify-center">{children}</main>
			</body>
		</html>
	);
}
