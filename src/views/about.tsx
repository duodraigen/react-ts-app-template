export const AboutView = () => {
	return (
		<div className="p-4">
			<picture>
				<img
					src="pictures/about.jpg"
					alt="about"
					className="rounded-full w-20"
				/>
			</picture>
			<h2 className="text-2xl font-semibold my-4">About This Template</h2>
			<p className="text-lg text-pretty">
				<code className="bg-gray-300 dark:bg-slate-600 rounded-md px-2 block w-fit mb-1">
					npm create vite@latest
				</code>{" "}
				Probably you heard about that command and how it makes your life simpler
				giving you a bare bone of a react app. Well, it works in the vastly
				majority of the cases. But i have a little issue and is the fact it
				install eslint by default when i just want to use biome and i have a
				clear vision about what i want in a dev environment, so, even it sounds
				ridiculous, i literally build a vite template project from scratch with:
			</p>
			<ul className="my-4 text-lg list-disc ml-6">
				<li>React Router support.</li>
				<li>Test suite with Vitest.</li>
				<li>Path alias pre configurations.</li>
				<li>Organized template folder structure.</li>
				<li>Configured Biome as the main formatter/linter.</li>
			</ul>
			<p className="my-4 text-lg text-pretty">
				<b className="font-bold">NOTE:</b> The pictures used in this template
				was borrowed from pinterest, see README.md to check the links and
				leaving them a like.
			</p>
		</div>
	);
};
