import React from "react";
import styles from "../../styles/MonetizeIt.module.css";

const MonetizeIt = () => {
  return (
    <div>
      <div
        id={styles.monetizeitbody}
        className="flex flex-col md:flex-row items-center w-full p-8 h-full py-32"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start justify-between h-full md:px-16 px-4">
          <div className="mb-10 md:mb-48 flex flex-row items-center">
            <h1 className="text-5xl md:text-6xl font-bold mr-4 md:mr-8">
              Monetize it
            </h1>

            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/monetizeItIcon.0c8a14a4.svg"
              alt="makeiticon"
            />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl mb-10">
              Using Instagram or TikTok to promote your products? Turn followers
              into customers by adding shoppable links to your Linkpop page
              powered by Shopify checkout.
            </p>

            <p className="font-semibold text-lg md:text-2xl mb-10">
              New to ecommerce? Level up your Linkpop page with a Shopify plan,
              starting at only $9 / month.
            </p>

            <h1 className="text-lg md:text-3xl underline">Get that money</h1>
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
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/monetizeIt.57576ef0.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default MonetizeIt;
