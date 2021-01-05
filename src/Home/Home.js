import React from "react";
import "./Home.css";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<div className='home__pictures'>
				<img src='coffee.png'></img>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
