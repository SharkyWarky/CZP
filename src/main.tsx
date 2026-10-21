import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Provider } from "jotai";
import "./index.css";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
	routeTree,
	basepath: import.meta.env.BASE_URL, // <--- Automatically switches between '/' (local) and '/CZP/' (GitHub Pages)
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
);
