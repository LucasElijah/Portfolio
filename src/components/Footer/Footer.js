import "./FooterStyles.css";

import React from "react";
import {
	FaFacebook,
	FaGithub,
	FaHome,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
						<div>
							<p>123 Street Way</p>
							<p>Succonda, CA 96969</p>
						</div>
					</div>
					<div className="phone">
						<h4>
							<FaPhone
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							1(293)392-2039
						</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							info@gmail.com
						</h4>
					</div>
				</div>

				<div className="right">
					<h4>About the company</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
					<div className="social">
						<a href="https://www.facebook.com">
							<FaFacebook
								size={30}
								style={{ color: "fff", marginRight: "1rem" }}
							/>
						</a>
						<a href="https://www.twitter.com">
							<FaTwitter
								size={30}
								style={{ color: "fff", marginRight: "1rem" }}
							/>
						</a>
						<a href="https://www.linkedin.com">
							<FaLinkedin
								size={30}
								style={{ color: "fff", marginRight: "1rem" }}
							/>
						</a>
						<a href="https://github.com/LucasElijah">
							<FaGithub size={30} style={{ color: "fff", marginRight: "1rem" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
