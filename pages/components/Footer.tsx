import React from "react";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";

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
          <h1 className="md:mr-4 md:mb-0 mb-4">
            <Link href="https://help.shopify.com/en/manual/online-sales-channels/linkpop">
              <a>Help Center</a>
            </Link>
          </h1>

          <h1 className="md:mr-4 md:mb-0 mb-4">
            <Link href="https://linkpop.com/terms">
              <a>Terms of Services</a>
            </Link>
          </h1>

          <h1 className="md:mr-4 md:mb-0 mb-4">
            <Link href="https://www.shopify.com/legal/privacy">
              <a>Privacy Policy</a>
            </Link>
          </h1>

          <div className="flex flex-row">
            <div className="mr-4 md:mr-4">
              <div className="border-2 border-black rounded-lg p-2 bg-white absolute z-50">
                <Link href="https://www.instagram.com/shopify">
                  <a>
                    <img
                      src="https://cdn.shopify.com/shopifycloud/linkpop/assets/instagramIcon.1465ef5e.svg"
                      alt=""
                    />
                  </a>
                </Link>
              </div>

              <div className="border-2 border-black rounded-lg p-2 relative bg-pink-400 top-1 left-1 z-0">
                <Link href="https://twitter.com/shopify">
                  <a>
                    <img
                      src="https://cdn.shopify.com/shopifycloud/linkpop/assets/instagramIcon.1465ef5e.svg"
                      alt=""
                      className="invisible"
                    />
                  </a>
                </Link>
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
