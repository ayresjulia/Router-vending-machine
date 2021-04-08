import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Chips from "./Chips";
import Water from "./Water";
import Starburst from "./Starburst";

const VendingMachine = () => {
	return (
		<main className="App">
			<BrowserRouter>
				<Navbar />
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/chips">
					<Chips />
				</Route>
				<Route exact path="/water">
					<Water />
				</Route>
				<Route exact path="/starburst">
					<Starburst />
				</Route>
			</BrowserRouter>
		</main>
	);
};

export default VendingMachine;
