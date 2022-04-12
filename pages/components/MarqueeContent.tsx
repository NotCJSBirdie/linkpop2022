import React from "react";
import styles from "../../styles/MarqueeContent.module.css";

const MarqueeContent = () => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="">
          <div className="border-2 border-black py-11 px-20 text-black bg-white text-4xl mr-8 rounded-lg flex flex-col items-center z-50 absolute">
            <h1>Digital</h1>
            <h1>Wallet</h1>
          </div>

          <div
            id={styles.digitalwallet}
            className="border-2 border-black py-11 px-20 text-black text-4xl mr-8 rounded-lg flex flex-col items-center z-0 relative top-2 left-2"
          >
            <h1 className="invisible">Digital</h1>
            <h1 className="invisible">Wallet</h1>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-16 px-20 text-black bg-white text-4xl mr-8 rounded-lg absolute z-50">
            <h1>Merch</h1>
          </div>

          <div
            id={styles.merch}
            className="border-2 border-black py-16 px-20 text-black text-4xl mr-8 rounded-lg relative top-2 left-2 z-0"
          >
            <h1>Merch</h1>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-16 px-20 text-black bg-white text-4xl mr-8 rounded-lg absolute z-50">
            <h1>Podcast</h1>
          </div>

          <div
            id={styles.podcast}
            className="border-2 border-black py-16 px-20 text-black text-4xl mr-8 rounded-lg relative top-2 left-2 z-0"
          >
            <h1>Podcast</h1>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-16 px-20 text-black bg-white text-4xl mr-8 rounded-lg absolute z-50">
            <h1> NFTs </h1>
          </div>

          <div
            id={styles.nft}
            className="border-2 border-black py-16 px-20 text-black bg-black text-4xl mr-8 rounded-lg relative top-2 left-2 z-0"
          >
            <h1> NFTs </h1>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-16 px-20 text-black bg-white text-4xl mr-8 rounded-lg absolute z-50">
            <h1>Socials</h1>
          </div>

          <div
            id={styles.socials}
            className="border-2 border-black py-16 px-20 text-black text-4xl mr-8 rounded-lg relative top-2 left-2 z-0"
          >
            <h1>Socials</h1>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-16 px-20 text-black bg-white text-4xl mr-8 rounded-lg absolute z-50">
            <h1>Products</h1>
          </div>

          <div
            id={styles.products}
            className="border-2 border-black py-16 px-20 text-black text-4xl mr-8 rounded-lg relative top-2 left-2 z-0"
          >
            <h1>Products</h1>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-11 px-20 text-black bg-white text-4xl mr-8 rounded-lg flex flex-col items-center absolute z-50">
            <h1>Blog</h1>
            <h1>Articles</h1>
          </div>

          <div
            id={styles.blogarticles}
            className="border-2 border-black py-11 px-20 text-black text-4xl mr-8 rounded-lg flex flex-col items-center relative top-2 left-2 z-0"
          >
            <h1>Blog</h1>
            <h1>Articles</h1>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-11 px-20 text-black bg-white text-4xl mr-8 rounded-lg flex flex-col items-center absolute z-50">
            <h1>Fav</h1>
            <h1>Videos</h1>
          </div>

          <div
            id={styles.favvideos}
            className="border-2 border-black py-11 px-20 text-black text-4xl mr-8 rounded-lg flex flex-col items-center relative top-2 left-2 z-0"
          >
            <h1>Fav</h1>
            <h1>Videos</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeContent;
