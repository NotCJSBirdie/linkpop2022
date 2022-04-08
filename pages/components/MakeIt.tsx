import React from "react";
import ReactPlayer from "react-player";
import styles from "../../styles/MakeIt.module.css";

const MakeIt = () => {
  return (
    <div>
      <div
        id={styles.makeitbody}
        className="flex flex-row items-center w-full p-8 h-full"
      >
        <div className="w-1/2 flex flex-col items-center">
          <ReactPlayer
            url="https://cdn.shopify.com/shopifycloud/linkpop/assets/makeIt.28ff607f.mp4"
            height={600}
            width={1000}
            loop={true}
            playing={true}
            controls={false}
            style={{
              border: 10,
              padding: 20,
              borderTopWidth: 20,
            }}
          />
        </div>

        <div className="w-1/2 flex flex-col items-start justify-between h-full px-16">
          <div className="mb-64 flex flex-row">
            <h1 className="text-7xl font-bold mr-8">Make It</h1>

            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/makeItIcon.02b102a7.svg"
              alt="makeiticon"
            />
          </div>

          <div>
            <p className="font-semibold text-2xl mb-10">
              Start a free Linkpop page that curates everything you’re creating
              online. Highlight important content like your website, blog,
              playlists, and more—all from your link in bio.
            </p>

            <h1 className="text-3xl underline">Make your Linkpop page</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeIt;
