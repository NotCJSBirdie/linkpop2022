import React from "react";
import styles from "../../styles/AnalyzeIt.module.css";

const AnalyzeIt = () => {
  return (
    <div>
      <div
        id={styles.analyzeitbody}
        className="flex flex-col md:flex-row items-center w-full p-8 h-full py-32"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start justify-between h-full md:px-16 px-4">
          <div className="mb-10 md:mb-48 flex flex-row items-center">
            <h1 className="text-5xl md:text-6xl font-bold mr-4 md:mr-8">
              Analyze it
            </h1>

            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/analyzeIcon.58b596cf.svg"
              alt="analyzeiticon"
            />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl mb-10">
              Easily track which content or products get the most clicks with
              Linkpop’s free analytics tool. Test performance and learn what
              sells on any day of the week.
            </p>

            <h1 className="text-lg md:text-3xl underline">
              Start tracking clicks
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <video
            controls
            autoPlay
            className="md:m-0 m-4 md:my-0 my-20 border-4 border-black rounded-lg"
            loop
          >
            <source
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/analyzeIt.e6a70ddb.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeIt;
