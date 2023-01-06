import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

import Test1 from "../../assets/pro4.jpg";
import Test2 from "../../assets/pro5.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am IIIII</h1>
        <p>React front-end web developer. I can create secure and responsive websites for clients</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Test2} className="img" alt="/" />
          </div>
          <div className="img-stack bottom">
            <img src={Test1} className="img" alt="/" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent