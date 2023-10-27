import { FlashingDots } from "@shared/components/flashing-dots/flashing-dots";
import { TextLink } from "@shared/components/text-link/text-link";
import Balancer from "react-wrap-balancer";

export default function Page() {
	return (
		<div className="ui-container space-y-12">
			<h1 className="ui-typo-h1">
				<Balancer>
					Oops, looks like my portfolio isn&apos;t ready yet <FlashingDots />
				</Balancer>
			</h1>
			<p className="ui-typo-large">
				<Balancer>
					However, you can still learn more about me on <TextLink href="https://linkedin.com/in/nikita-tashchilin">LinkedIn</TextLink>
				</Balancer>
			</p>
		</div>
	);
}
