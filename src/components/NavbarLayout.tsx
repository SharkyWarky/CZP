import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function NavbarLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
