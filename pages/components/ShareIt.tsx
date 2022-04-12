import React from "react";
import styles from "../../styles/ShareIt.module.css";

const ShareIt = () => {
  return (
    <div>
      <div
        id={styles.shareitbody}
        className="flex flex-col md:flex-row items-center w-full p-8 h-full"
      >
        <div className="order-last md:order-first w-full md:w-1/2 flex flex-col items-center">
          <video
            controls
            autoPlay
            className="md:m-0 md:my-0 my-20 border-4 border-black rounded-lg z-50"
            loop
          >
            <source
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/shareIt.df4df825.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start justify-between h-full md:px-16 px-4">
          <div className="mb-10 md:mb-48 flex flex-row items-center">
            <h1 className="text-5xl md:text-6xl font-bold mr-4 md:mr-8">
              Share It
            </h1>

            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/shareIt.c796dad5.svg"
              alt="shareiticon"
            />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl mb-10">
              Once your link in bio page is ready, copy and paste your custom
              URL to Instagram, TikTok, Patreon, or anywhere with a social bio.
            </p>

            <p className="font-semibold text-lg md:text-2xl mb-10">
              Linkpop is optimized for lightning-fast load times, giving your
              audience a shoppable experience in seconds.
            </p>

            <h1 className="text-lg md:text-3xl underline">
              Update your link in bio
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareIt;
