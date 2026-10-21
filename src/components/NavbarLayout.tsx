import { Outlet } from "@tanstack/react-router"; // <--- Updated import
import Navbar from "./Navbar";
import ThemeApplier from "./ThemeApplier";
import ScrollToTop from "./ScrollToTop";

export default function NavbarLayout() {
	return (
		<>
			<ThemeApplier />
			<Navbar />
			<ScrollToTop />
			<main className="pt-17.5">
				<Outlet />
			</main>
		</>
	);
}
