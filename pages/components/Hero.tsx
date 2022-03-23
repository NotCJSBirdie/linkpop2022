import React from "react";
import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div
      id={styles.herobody}
      className="w-full overflow-hidden py-20 px-10 border-b-2 border-black"
    >
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 w-full flex flex-col items-start mr-8">
          <div className="text-5xl md:text-8xl mb-32">
            <h1 className="font-bold">Make your link in bio shoppable</h1>
          </div>

          <div className="text-2xl md:text-4xl mb-20">
            <h3>
              Turn your audience into customers through your social bio with
              Linkpop—a free link in bio tool designed for commerce, powered by
              Shopify’s fast and secure checkout.
            </h3>
          </div>

          <div className="text-sm md:text-xl">
            <div className="w-full md:w-5/6 flex flex-row items-center bg-white border-2 border-black rounded-full p-2 z-50 relative">
              <span>linkpop.com/</span>
              <span className="flex flex-row items-center">
                <input
                  className="text-sm md:text-xl text-black focus:outline-none w-full"
                  placeholder="yourname"
                ></input>
                <button
                  id={styles.buttonhero}
                  className="rounded-full text-white w-full p-2"
                >
                  Sign up for free
                </button>
              </span>
            </div>

            <div className="w-full md:w-5/6 flex flex-row items-center bg-black border-2 border-black rounded-full p-2 z-0 relative bottom-12 md:bottom-14 left-2">
              <span className="invisible">linkpop.com/</span>
              <span className="flex flex-row items-center invisible">
                <input
                  className="text-2xl text-black focus:outline-none w-full invisible"
                  placeholder="yourname"
                ></input>
                <button className="rounded-full text-white bg-blue-900 w-full p-2 invisible">
                  Sign up for free
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 w-full flex flex-col items-end">
          <img
            src="https://cdn.shopify.com/shopifycloud/linkpop/assets/phoneImg.e88b6c05.png"
            alt="phoneImg"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
