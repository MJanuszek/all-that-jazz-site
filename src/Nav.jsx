import "./styles/nav.scss";
import React from "react";
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div className="nav-wrapper" id="nav">
      <Link
        activeClass="active"
        to="nav"
        spy={true}
        smooth={true}
        duration={1200}
        className="to-top-link"
      >
        <img src="src/assets/up-arrow.png" alt="" className="arrow" />
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="news"
        spy={true}
        smooth={true}
        duration={1200}
      >
        News
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="jazzInfo"
        spy={true}
        smooth={true}
        duration={700}
      >
        About
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="jazzLegends"
        spy={true}
        smooth={true}
        duration={700}
      >
        Jazz Legends
      </Link>
    </div>
  );
}

export default Navigation;
