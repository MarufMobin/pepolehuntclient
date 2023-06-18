import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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

const slidermainzero = () => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 m-auto">
        <div className="spacer-single"></div>
        <div className="spacer-double"></div>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={300}
          duration={600}
        >
          <h1 className="text-center text-white">Our Successfull Story</h1>
        </Reveal>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={600}
          duration={600}
        >
          <p className="lead text-center text-white">
            As technology continues to evolve, the role of these websites will
            only grow stronger, ensuring that no missing person is forgotten and
            that families receive the support they need to bring their loved
            ones home.
          </p>
        </Reveal>
        <div className="spacer-10"></div>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={800}
          duration={600}
        >
          <div className="spacer-single"></div>
          <div className="spacer-double"></div>
        </Reveal>
      </div>
    </div>
  </div>
);
export default slidermainzero;
