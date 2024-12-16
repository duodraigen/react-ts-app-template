import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { routeMap } from "@utils/route-map";
import "@src/styles.dev.css";

const root = createRoot(document.querySelector("#root") as Element);

root.render(
	<StrictMode>
		<RouterProvider router={routeMap} />
	</StrictMode>,
);
