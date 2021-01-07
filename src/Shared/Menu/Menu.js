import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<div className='menu'>
			<nav>
				<ul>
					<Link to='/About'>
						<div className='nav__item-container'>
							<div className='menu__dot'></div>
							<div className='dot__container'>
								<div className='menu__dot-second'></div>
								<span className='nav__item'>About</span>
							</div>
						</div>
					</Link>

					<div className='nav__item-container'>
						<div className='menu__dot'></div>
						<div className='dot__container'>
							<div className='menu__dot-second'></div>
							<span className='nav__item'>Menu</span>
						</div>
					</div>
					<div className='nav__item-container'>
						<div className='menu__dot'></div>
						<div className='dot__container'>
							<div className='menu__dot-second'></div>
							<span className='nav__item'>Gallery</span>
						</div>
					</div>
					<div className='nav__item-container'>
						<div className='menu__dot'></div>
						<div className='dot__container'>
							<div className='menu__dot-second'></div>
							<span className='nav__item'>Contact</span>
						</div>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
