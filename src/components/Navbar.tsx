import { Link } from "react-router";

// src/components/Navbar.tsx
export default function Navbar() {
	return (
		<nav className="p-4 border-b">
			<h2 className="text-2xl font-bold">Navbar</h2>
			<Link to="/" className="navItem">
				Home
			</Link>
			<Link to="/about" className="navItem">
				About
			</Link>
			<Link to="/login" className="navItem">
				Login
			</Link>
			<Link to="/checkout">Checkout</Link>
		</nav>
	);
}
