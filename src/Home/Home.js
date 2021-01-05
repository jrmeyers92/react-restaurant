import React from "react";
import "./Home.css";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Coffee from "../Assets/coffee.png";

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<div className='home__pictures'>
				<img
					className='home__image bloodyMary'
					src='https://doubleshot.cafe/wp-content/themes/doubleshot/graphics/home-tiles/bloody_mary.png'></img>
				<img
					className='home__image coffee'
					src='https://doubleshot.cafe/wp-content/themes/doubleshot/graphics/home-tiles/coffee.png'></img>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
