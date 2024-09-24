import "./styles/nav.scss";
import React from "react";
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div className="nav-wrapper">
      {" "}
      <Link
        activeClass="active"
        to="jazzInfo"
        spy={true}
        smooth={true}
        duration={500}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="jazzLegends"
        spy={true}
        smooth={true}
        duration={500}
      >
        Jazz Legends
      </Link>
    </div>
  );
}

export default Navigation;
