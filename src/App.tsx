import { BrowserRouter, Routes, Route } from "react-router";
import NavbarLayout from "./components/NavbarLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavbarLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</BrowserRouter>
	);
}
