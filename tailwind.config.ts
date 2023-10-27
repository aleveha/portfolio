import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const em = (value: number) => value / 16 + "em";
const rem = (value: number) => value / 16 + "rem";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-base)", ...fontFamily.sans],
				custom: ["var(--font-custom)", ...fontFamily.sans],
			},
			keyframes: {
				"flashing-dot": {
					"0%": { backgroundColor: "#f97316" },
					"50%, 100%": { backgroundColor: "rgba(249, 115, 22, 0.4)" },
				},
			},
			screens: {
				sm: em(576),
				md: em(768),
				lg: em(992),
				xl: em(1280),
				xxl: em(1440),
			},
			container: {
				screens: {
					sm: "none",
					md: rem(688),
					lg: rem(912),
					xl: rem(1120),
					xxl: rem(1216),
				},
			},
			zIndex: {
				1: "1",
				focus: "5",
				fixed: "10",
				menu: "25",
				header: "50",
				modal: "100",
				dropdown: "200",
				flashMessage: "250",
				tooltip: "300",
			},
		},
	},
} satisfies Config;
