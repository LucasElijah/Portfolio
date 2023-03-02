import "./HeroImgStyles.css";
import React from "react";

import testimg1 from "../../assets/img3.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
	return (
		<div className="hero">

			<div className="mask">
				<img className="testimg1" src={testimg1} alt="/" />
			</div>

			<div className="content">
				<p>Hello, I am a Freelance Developer</p>
				<h1>React Dev</h1>
				<div>
					<Link to="/project" className="btn">Projects</Link>
					<Link to="/about" className="btn btn-light">About</Link>
				</div>
			</div>
      
		</div>
	);
};

export default HeroImg;
