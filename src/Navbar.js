import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="Navbar">
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/chips">
				Chips
			</NavLink>
			<NavLink exact to="/water">
				Water
			</NavLink>
			<NavLink exact to="/starburst">
				Starburst
			</NavLink>
		</nav>
	);
};

export default Navbar;
