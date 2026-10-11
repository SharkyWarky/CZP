import { Outlet } from "react-router";
import Navbar from "./Navbar";

import ScrollToTop from "./ScrollToTop";

export default function NavbarLayout() {
	return (
		<>
			<Navbar />
			<ScrollToTop />
			<main className="pt-17.5">
				<Outlet />
			</main>
		</>
	);
}
