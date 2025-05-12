import React from "react";

const Loader = () => {


  return (
    <>
      <div className="loader_wrap">
        <div className="top_loader">
          <h3>ThePortfolio</h3>
        </div>
        <div className="bottom_loader">
          <div className="bottom_left">
            <h3>I DEVELOP USER-FRIENDLY INTERFACES AND WEB APPLICATIONS.</h3>
            {/* <h3>I DEVELOP 3D VISUALS , USER INTERFACES AND WEB APPLICATION</h3> */}
            <span>Loading...</span>
          </div>
          <div className="bottom_right">
            <h3>
              <span className="count">0</span>%
            </h3>
          </div>
        </div>
      </div>
      <div className="crsr"></div>
    </>
  );
};

export default Loader;
