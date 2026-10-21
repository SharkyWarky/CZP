import { createRootRoute } from "@tanstack/react-router";
/*import { TanStackRouterDevtools } from "@tanstack/router-devtools";*/
import NavbarLayout from "../components/NavbarLayout";

export const Route = createRootRoute({
	component: () => (
		<>
			<NavbarLayout /> {/* Notice there are no tags inside it! */}
			{/*<TanStackRouterDevtools />*/}
		</>
	),
});
