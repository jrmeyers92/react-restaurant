import React from "react";
import "./SectionHeader.css";

const SectionHeader = (props) => {
	return <h2 className='sectionHeader'>{props.title}</h2>;
};

export default SectionHeader;
