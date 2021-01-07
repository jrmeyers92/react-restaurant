import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import FoodMenu from "./FoodMenu/FoodMenu";
import Contact from "./Contact/Contact";

function App() {
	return (
		<div className='App'>
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/About' component={About} />
				<Route path='/FoodMenu' component={FoodMenu} />
				<Route path='/Contact' component={Contact} />
			</Router>
		</div>
	);
}

export default App;
