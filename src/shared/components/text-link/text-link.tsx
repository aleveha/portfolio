import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface TextLinkProps extends LinkProps {
	children: ReactNode;
}

export const TextLink: FC<TextLinkProps> = ({ children, ...linkProps }) => {
	return (
		<Link className="underline underline-offset-2 transition-colors duration-150 ease-in-out hover:text-orange-500" {...linkProps}>
			{children}
		</Link>
	);
};
