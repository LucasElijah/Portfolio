import "../WorkCard/WorkCardStyles.css";
import WorkCardData from "../WorkCard/WorkCardData.js";

import React from "react";
import WorkCard from "../WorkCard/WorkCard";

const Work = () => {
	return (
		<div className="work-container">
			<h1 className="project-heading">Projects</h1>
			<div className="project-container">
				{WorkCardData.map((val, ind) => {
					return(
						<WorkCard 
						key={ind}
						imgsrc={val.imgsrc}
						title={val.title}
						text={val.text}
						view={val.view}
						source={val.source}
						/>
					)
				})}
			</div>
		</div>
	);
};

export default Work;
