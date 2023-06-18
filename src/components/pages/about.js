import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import imgOne from "../../assets/about/gallery-10.jpg";
import imgTwo from "../../assets/about/gallery-2.jpg";
import imgThree from "../../assets/about/gallery-6.jpg";
import "../../../src/assets/style.scss";
import SliderMainZero from "../components/SliderMainZero";
import Header from "../menu/header";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import "../../assets/style.scss";

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

const about = () => (
  <>
    <section
      className="jumbotron"
      style={{ backgroundImage: `url(${"./img/background/subheader.jpg"})` }}
    >
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-white">About Us</h1>
            <h4 className="text-white text-center w-50 mx-auto">
              People Hunt offers a comprehensive range of resources, including
              educational materials, expert advice, and access to support
              networks, empowering families and friends to navigate the
              challenges that arise during the search process.
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section className="jumbotron pb-5 mb-5 background_color  onStep css-142k476 fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-5">
                <img
                  src={imgOne}
                  alt=""
                  className="img-fluid  onStep css-142k476 fadeInUp"
                />
              </div>
              <div className="col-7">
                <span className="line__subtitle py-5  onStep css-142k476 fadeInUp">
                  Since 2023
                </span>
                <img
                  src={imgTwo}
                  alt=""
                  className="img-fluid  onStep css-142k476 fadeInUp"
                />
              </div>
            </div>
            <div className="spacer-double"></div>
            <div>
              <h6 className=" onStep css-142k476 fadeInUp">About Us</h6>
              <h2 className=" onStep css-142k476 fadeInUp">
                We Plan For The Future
              </h2>
              <p className=" onStep css-142k476 fadeInUp">
                At People Hunt, we believe in the power of compassion,
                community, and relentless determination when it comes to finding
                missing individuals. Our mission is to bring hope and solace to
                families and friends affected by the distress of a lost loved
                one. We are committed to leveraging technology and the
                collective efforts of our users to aid in the search and
                recovery process.
              </p>
            </div>
          </div>
          <div className="col-md-5 ">
            <img
              src={imgThree}
              alt=""
              className="img-fluid h-75  onStep css-142k476 fadeInUp"
            />
          </div>
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h6 className="pt-5  onStep css-142k476 fadeInUp">why Choose us</h6>
          <h1 className="fw-bolder w-75  onStep css-142k476 fadeInUp">
            We’re a <span className="text-danger ">Bangladesh</span> creative
            agency based in Dhaka
          </h1>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <img
                src={imgOne}
                alt=""
                className="img-fluid ps-5 border-start border-5  onStep css-142k476 fadeInUp"
              />
            </div>
          </div>
          <p className="w-50 mt-5 ps-5 border-start border-5  onStep css-142k476 fadeInUp">
            We’re a Bangladesh creative agency based in Dhaka helping in
            Bangladeshi Community finding missing people all over the country's
            area, We also a non profitable agency
          </p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Accordion defaultActiveKey="0" className="py-5">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    What is a missing people website?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    How can I use a missing people website to help find a
                    missing person?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {" "}
                    To use a missing people website effectively, you can start
                    by visiting the website and reviewing any available
                    information about the missing person. You can share their
                    details, including photographs and any relevant information,
                    on social media platforms and within your network to raise
                    awareness. Additionally, you can stay updated on the website
                    for any updates or new information regarding the search
                    efforts.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Are missing people websites effective in finding missing
                    persons?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    While missing people websites cannot guarantee success in
                    finding missing individuals, they play a crucial role in
                    raising awareness, sharing information, and connecting
                    communities. These platforms have contributed to numerous
                    success stories where missing persons were located and
                    reunited with their families through the collective efforts
                    of online communities and law enforcement agencies.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-md-6">
            <Accordion defaultActiveKey="0" className="py-5">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Are missing people websites only for recent disappearances?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    No, missing people websites are designed to aid in the
                    search for individuals who have gone missing regardless of
                    the time that has elapsed. While immediate reporting is
                    crucial, these websites provide ongoing support and
                    awareness, which can be valuable even for long-term missing
                    persons cases.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Can I report a missing person on a missing people website?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {" "}
                    Typically, missing people websites do not handle direct
                    reports of missing persons. It is important to contact your
                    local law enforcement agency immediately to report a missing
                    person. Once the report is filed, you can reach out to the
                    missing people website and provide them with the necessary
                    details and contact information so they can assist in
                    spreading the word and supporting the search efforts.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    How do I contact a missing people website if I have further
                    questions or need assistance?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    Missing people websites usually have contact information,
                    such as email addresses or helpline numbers, where you can
                    reach out to their support team for further assistance or
                    inquiries.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);
export default about;
