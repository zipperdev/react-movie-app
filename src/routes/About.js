import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “The Movies Is Always Exiting and Great Witch Made by Humans So It's very Amazing.”
      </span>
      <span>− Zipper_, 2021</span>
    </div>
  );
}

export default About;