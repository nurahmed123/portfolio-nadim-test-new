import React from "react";
import Features from "../component/Features/Features";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero" style={{ paddingTop: "120px" }}>
        <div className="container">
          <div className="heading text-center">
            <h1>About Me</h1>
            <h4>Get to know more about my journey and expertise</h4>
          </div>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default About;