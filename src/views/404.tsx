import { useNavigate } from "react-router-dom";

import { Button } from "@components/button";

export const NotFoundView = () => {
	const navigate = useNavigate();

	function navigateToHome() {
		navigate("/");
	}

	return (
		<div className="h-dvh grid place-items-center">
			<div className="grid justify-items-center w-full p-4">
				<img
					src="pictures/notfound.jpg"
					alt="404"
					className="rounded-full w-52"
				/>
				<h2 className="text-4xl font-semibold my-2 mt-6">Sorry Man</h2>
				<p className="font-mono text-2xl my-2 text-center">
					404 We Can't Found This
				</p>
				<p className="text-lg max-w-[400px] text-pretty">
					This page is unavailable or simply does not exist. Check if you
					<b> typed the url correctly </b>or you have a stable internet
					connection and try again. ;-;
				</p>
				<div className="my-6">
					<Button onClickFn={navigateToHome}>Return to Home</Button>
				</div>
			</div>
		</div>
	);
};
