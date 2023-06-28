import "@shared/styles.css";
import { LayoutProps } from "@shared/types";
import { Metadata } from "next";
import { Inter, Noto_Sans_Mono } from "next/font/google";

const FONT_BASE = Inter({
	display: "swap",
	subsets: ["cyrillic", "latin"],
	variable: "--font-base",
	weight: ["400", "500", "600", "700"],
});

const FONT_CUSTOM = Noto_Sans_Mono({
	display: "swap",
	subsets: ["cyrillic", "latin"],
	variable: "--font-custom",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Meta title",
	description: "Meta description",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${FONT_BASE.variable} ${FONT_CUSTOM.variable}`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
