import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
const Loader = ({ handleNav }) => {
  const [loader, SetLoader] = useState(0);

  const timerLoader = () => {
    let timer = 0;
    var counterStart = setInterval(function () {
      timer++;
      if (timer >= 100) {
        counterStoper();
      }
      SetLoader(timer);
    }, 20);
    function counterStoper() {
      handleNav(true);
      clearInterval(counterStart);
    }
  };

  useEffect(() => {
    timerLoader();
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 3, ease: [0.37, 0, 0.63, 1], duration: 1 }}
        className="loader_wrap bg-black z-[9999] fixed h-screen w-full px-4 sm:px-10 py-5 "
      >
        <div className="top_loader font1 italic text-2xl">
          <h3>ThePortfolio</h3>
        </div>
        <div className="bottom_loader flex items-end pb-8 justify-between h-full">
          <div className="bottom_left font2   sm:w-1/2">
            <h3 className="text-[13px] sm:text-3xl">
              I DEVELOP USER-FRIENDLY INTERFACES AND WEB APPLICATIONS.
            </h3>
            {/* <h3>I DEVELOP 3D VISUALS , USER INTERFACES AND WEB APPLICATION</h3> */}
            <span className="text-gray-400 pt-5">Loading...</span>
          </div>
          <div className="bottom_right text-xl">
            <h3>
              <span className="count">{loader}</span>%
            </h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Loader;
