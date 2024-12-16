import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Button } from "@components/button";

describe("App rendering", () => {
	it("Renders the App component", () => {
		render(
			<p>
				<Button onClickFn={() => {}}>Button that does nothing</Button>
			</p>,
		);
		screen.debug();
	});
});
