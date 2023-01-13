import React from "react";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard/PricingCard";
import Work from "../components/Work/Work";

const Project = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading="PROYECTOS..." text="Some of my recent shtuff" 
        /* heading/text = variables (need to pass to heroimg.js) */ 
      />
			<Work />
			<PricingCard />
			<Footer />
		</div>
	);
};

export default Project;
