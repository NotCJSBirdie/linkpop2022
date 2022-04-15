import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className="w-full px-10 py-10" id={styles.footerbody}>
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="md:mb-0 mb-4">
          <img
            src="https://cdn.shopify.com/shopifycloud/linkpop/assets/logo.5a02db47.svg"
            alt="linkpop footer"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <h1 className="md:mr-4 md:mb-0 mb-4">Help Center</h1>

          <h1 className="md:mr-4 md:mb-0 mb-4">Terms of Services</h1>

          <h1 className="md:mr-4 md:mb-0 mb-4">Privacy Policy</h1>

          <div className="flex flex-row">
            <div className="mr-4 md:mr-4">
              <div className="border-2 border-black rounded-lg p-2 bg-white absolute z-50">
                <img
                  src="https://cdn.shopify.com/shopifycloud/linkpop/assets/instagramIcon.1465ef5e.svg"
                  alt=""
                />
              </div>

              <div className="border-2 border-black rounded-lg p-2 relative bg-pink-400 top-1 left-1 z-0">
                <img
                  src="https://cdn.shopify.com/shopifycloud/linkpop/assets/instagramIcon.1465ef5e.svg"
                  alt=""
                  className="invisible"
                />
              </div>
            </div>

            <div>
              <div className="mr-4 md:mr-4">
                <div className="border-2 border-black rounded-lg p-3 bg-white absolute z-50">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/linkpop/assets/twitterIcon.bcc917da.svg"
                    alt=""
                  />
                </div>

                <div className="border-2 border-black rounded-lg p-3 relative bg-orange-400 top-1 left-1 z-0">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/linkpop/assets/twitterIcon.bcc917da.svg"
                    alt=""
                    className="invisible"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
