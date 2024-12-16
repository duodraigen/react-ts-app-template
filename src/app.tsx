import { Outlet } from "react-router-dom";

import { HeaderLayout } from "./layouts/header";
import { NavigatorLink } from "@components/navigator-link";

export const App = () => {
	return (
		<>
			<HeaderLayout>
				<h1 className="font-bold text-lg mx-2 flex items-center gap-2 text-slate-800 dark:text-gray-100">
					<img
						src="logo.svg"
						alt="logo"
						className="w-10 inline filter-none dark:filter invert"
					/>
					<p className="hidden md:block">Template</p>
				</h1>
				<nav className="p-4 grid grid-flow-col justify-self-end gap-4">
					<NavigatorLink target="/">Home</NavigatorLink>
					<NavigatorLink target="/about">About</NavigatorLink>
					<NavigatorLink target="/donate">Donate</NavigatorLink>
					<NavigatorLink target="/thisthingdoesnotexist">404</NavigatorLink>
				</nav>
			</HeaderLayout>
			<Outlet />
		</>
	);
};
