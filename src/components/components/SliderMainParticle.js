import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from "@reach/router";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const slidermainparticle = () => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 text-center">
        <div className="spacer-single"></div>
        <div className="spacer-double"></div>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={300}
          duration={900}
          triggerOnce
        >
          <h1 className="col-white">
            Connecting Families through a Comprehensive People Search Platform
          </h1>
        </Reveal>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={600}
          duration={900}
          triggerOnce
        ></Reveal>
        <div className="spacer-10"></div>
        <Reveal
          className="onStep d-inline"
          keyframes={inline}
          delay={800}
          duration={900}
          triggerOnce
        >
          <Link to="/explore" className="btn-main inline lead">
            {" "}
            Explore
          </Link>
          <Link to="/create" className="btn-main inline white lead">
            create
          </Link>
          <div className="mb-sm-30"></div>
        </Reveal>
      </div>
    </div>
  </div>
);
export default slidermainparticle;
