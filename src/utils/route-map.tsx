import { App } from "@src/app";
import { HomeView } from "@views/home";
import { AboutView } from "@views/about";
import { NotFoundView } from "@views/404";
import { DonateView } from "@views/donate";

import { createBrowserRouter } from "react-router-dom";

/**
 * Use this Array to organize routes for your SPA
 * each object is a route represented according to
 * react router library documentation. See
 * https://reactrouter.com/6.28.0/routers/create-browser-router
 */
export const routeMap = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomeView />,
			},
			{
				path: "about",
				element: <AboutView />,
			},
			{
				path: "donate",
				element: <DonateView />,
			},
		],
	},
	{
		path: "/*",
		element: <NotFoundView />,
	},
]);
