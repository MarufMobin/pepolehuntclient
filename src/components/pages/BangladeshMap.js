import React from "react";
import CountUp from "react-countup";

const BangladeshMap = () => {
  return (
    <>
      {/* Counter Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-3 py-5">
            <div className="padding40 box-rounded mb30">
              <div className="counter text-center">
                <p>
                  <CountUp end={450} /> +
                </p>
              </div>
              <h5 className="text-center">Success Case</h5>
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="padding40 box-rounded mb30">
              <div className="counter text-center">
                <p>
                  <CountUp end={560} /> +
                </p>
              </div>
              <h5 className="text-center">Submited Cases</h5>
            </div>
          </div>

          <div className="col-md-3 py-5">
            <div className="padding40 box-rounded mb30">
              <div className="counter text-center">
                <p>
                  <CountUp end={20000} /> +
                </p>
              </div>
              <h5 className="text-center">Avarage Missing yearly</h5>
            </div>
          </div>

          <div className="col-md-3 py-5">
            <div className="padding40 box-rounded mb30">
              <div className="counter text-center">
                <p>
                  <CountUp end={365348} /> +
                </p>
              </div>
              <h5 className="text-center">World yearly missing</h5>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.bdclean.org/wp-content/uploads/2018/10/bd-map-fb.html"
        //   frameborder="0"
        style={{
          width: "75%",
          height: "150vh",
          padding: "0px !important",
          textAlign: "center",
        }}
        allowfullscreen=""
        aria-hidden="false"
        width="100%"
        tabindex="0"
      ></iframe>
    </>
  );
};

export default BangladeshMap;
