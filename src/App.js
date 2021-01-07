import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";

function App() {
	return (
		<div className='App'>
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/About' component={About} />
			</Router>
		</div>
	);
}

export default App;
