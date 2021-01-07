import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import FoodMenu from "./FoodMenu/FoodMenu";

function App() {
	return (
		<div className='App'>
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/About' component={About} />
				<Route path='/FoodMenu' component={FoodMenu} />
			</Router>
		</div>
	);
}

export default App;
