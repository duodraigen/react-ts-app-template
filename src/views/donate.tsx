import { Button } from "@src/components/button";

export const DonateView = () => {
	function handleDonative() {
		window.alert("Did you really read the text (?");
	}

	return (
		<div className="p-4">
			<picture>
				<img
					src="pictures/donate.jpg"
					alt="donate"
					className="rounded-full w-20"
				/>
			</picture>
			<h2 className="text-2xl font-semibold my-4">Really Wanna Donate?</h2>
			<p className="text-lg text-pretty">
				That's cute bro, i will glad to get ur money if you want to, cuz i ran
				out of bolivars weon. So, while i'm texting this stuff i think ur
				reading because u want a button or concrete data, i really try to
				explain you the real bank account data isn't here, because am not
				receiving any money by the moment but am glad to you to take ur time to
				read this because you probably think this is a waste of time
			</p>
			<div className="grid justify-center my-6">
				<Button onClickFn={handleDonative}>DONATE NOW</Button>
			</div>
		</div>
	);
};
