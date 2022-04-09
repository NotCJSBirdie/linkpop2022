import React from "react";
import styles from "../../styles/MakeIt.module.css";

const MakeIt = () => {
  return (
    <div>
      <div
        id={styles.makeitbody}
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
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/makeIt.28ff607f.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start justify-between h-full md:px-16 px-4">
          <div className="mb-10 md:mb-64 flex flex-row items-center">
            <h1 className="text-5xl md:text-6xl font-bold mr-4 md:mr-8">
              Make It
            </h1>

            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/makeItIcon.02b102a7.svg"
              alt="makeiticon"
            />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl mb-10">
              Start a free Linkpop page that curates everything you’re creating
              online. Highlight important content like your website, blog,
              playlists, and more—all from your link in bio.
            </p>

            <h1 className="text-lg md:text-3xl underline">
              Make your Linkpop page
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeIt;
