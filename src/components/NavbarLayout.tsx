import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function NavbarLayout() {
    return (
        <>
            <Navbar />
            <main className="pt-17.5">
                <Outlet />
            </main>
        </>
    );
}
