/* eslint-disable no-unused-vars */
import React from "react";
import { FaPortrait, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem" >FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to our one-stop hub for movie enthusiasts! Explore
          comprehensive movie details, cast information, ratings, and delve into
          the fascinating world of celebrities, all in one place.
        </div>
        <div className="socialIcons">
          <a href="https://jaypokharna.vercel.app/">
            <span className="icon">
              <FaPortrait color="white" />
            </span>
          </a>
          <a href="http://www.instagram.com/jay_pokharna">
            <span className="icon">
              <FaInstagram color="white" />
            </span>
          </a>{" "}
          <a href="https://twitter.com/pokharnajay">
            <span className="icon">
              <FaTwitter color="white" />
            </span>
          </a>{" "}
          <a href="https://www.linkedin.com/in/jay-pokharna-940a42207/">
            <span className="icon">
              <FaLinkedin color="white" />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
