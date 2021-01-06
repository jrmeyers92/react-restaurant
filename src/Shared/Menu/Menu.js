import React from "react";
import "./Menu.css";

const Menu = () => {
	return (
		<div className='menu'>
			<nav>
				<ul>
					<div className='nav__item-container'>
						<div className='menu__dot'></div>
						<div className='dot__container'>
							<div className='menu__dot-second'></div>
							<span className='nav__item'>About</span>
						</div>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
