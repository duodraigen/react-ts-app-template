export const HomeView = () => {
	return (
		<main className="p-4">
			<article className="flex flex-col w-full md:flex-row gap-6">
				<img
					src="pictures/pic.jpg"
					alt="profile"
					className="rounded-full w-60 self-center md:self-start"
				/>
				<div className="py-2 self-center">
					<h2 className="text-2xl font-bold">Remshi The Dragon</h2>
					<p className="text-lg max-w-lg my-2">
						Photography, Kitchen and Computer non complex stuff enjoyer. Big fan
						of soda cans and digimon (ah, the dog, not mine but i feel
						identified with his face)
					</p>
					<div className="flex flex-row mt-6 gap-2">
						<a
							target="blank"
							className="underline text-slate-600 dark:text-slate-400"
							href="https://github.com/duodraigen"
						>
							Github
						</a>
						<a
							target="blank"
							className="underline text-slate-600 dark:text-slate-400"
							href="https://last.fm/user/remshioru/"
						>
							LastFM
						</a>
						<a
							target="blank"
							className="underline text-slate-600 dark:text-slate-400"
							href="https://www.pinterest.com/remshidoragon/"
						>
							Pinterest
						</a>
					</div>
				</div>
			</article>
			<article className="mt-14">
				<section>
					<h3 className="my-4 text-2xl font-semibold">About Me</h3>
					<p className="text-lg text-pretty">
						Venezuelan systems engineer who really just want to develop random
						stuff while chilling and living a quiet life outside the standard
						issues i can get along. We can talk about videogames or comedy
						things while idk, we are enjoying a burger or sitting on a chair
						asking why the hell the roast chicken price is inflating
						outrageously, or why a standard salary equals to be the price of a
						pair of shoes lol.
					</p>

					<h3 className="my-4 mt-10 text-2xl font-semibold">
						Why Are You Making This Random Blog?
					</h3>
					<p className="text-lg text-pretty">
						To be honest, a blog sounds like a good idea to talk about general
						stuff of my life and how i can carry and evaluate different
						scenarios depending of my point of view. So, simply that is like a
						window to others to express myself and my thoughts about many things
						i like (and sometimes the ones i do not)
					</p>

					<h3 className="my-4 mt-10 text-2xl font-semibold">Some Goals</h3>
					<ul className="text-lg list-disc ml-6">
						<li>Being able to Make pizza at sundays</li>
						<li>Being a good programmer</li>
						<li>Take nice photos</li>
						<li>Enjoy life</li>
					</ul>
				</section>
			</article>
		</main>
	);
};
