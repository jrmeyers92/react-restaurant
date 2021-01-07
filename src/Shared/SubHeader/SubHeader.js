import React from "react";
import "./SubHeader.css";

const SubHeader = (props) => {
	return <h3 className='subHeader'>{props.title}</h3>;
};

export default SubHeader;
