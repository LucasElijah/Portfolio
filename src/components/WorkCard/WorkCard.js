import "./WorkCardStyles.css";

import React from "react";
// import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
	return (
		<div className="project-card">
			<img src={props.imgsrc} alt="img" />
			<h2 className="project-title">{props.title}</h2>
			<div className="project-details">
				<p>{props.text}</p>
				<div className="project-buttons">
					<a href={props.view} className="btn">
						View
					</a>
					<a href={props.source} className="btn">
						Source
					</a>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;


	/* <NavLink to={props.view} className="btn">
						View
					</NavLink>
					<NavLink to={props.source} className="btn">
						Source
					</NavLink> */

