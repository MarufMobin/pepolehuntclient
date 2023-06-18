import React from "react";
import SliderMainZero from "../components/SliderMainZero";
import FeatureBox from "../components/FeatureBox";
import CarouselCollection from "../components/CarouselCollection";
import ColumnNew from "../components/ColumnNew";
import AuthorList from "../components/authorList";
import Footer from "../components/footer";
import Success from "../components/Success";

const success = () => (
  <div>
    <section
      className="jumbotron breadcumb no-bg"
      style={{ backgroundImage: `url(${"./img/background/subheader.jpg"})` }}
    >
      <SliderMainZero />
    </section>

    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Our Successfull Cases</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <Success></Success>
      </div>
    </section>

    {/* <section className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Top Sellers</h2>
            <div className="small-border"></div>
          </div>
        </div>
        <div className="col-lg-12">
          <AuthorList />
        </div>
      </div>
    </section> */}

    {/* <section className="container-fluid bg-gray">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Create and sell your NFTs</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <FeatureBox />
      </div>
    </section> */}
    <Footer />
  </div>
);
export default success;
