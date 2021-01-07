import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='https://doubleshot.cafe/wp-content/themes/doubleshot/graphics/logo-open.png'></img>
			</Link>
		</div>
	);
};

export default Header;
