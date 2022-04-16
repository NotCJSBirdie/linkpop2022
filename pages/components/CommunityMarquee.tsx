import React from "react";
import Link from "next/link";

const CommunityMarquee = () => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="">
          <div className="border-2 border-black py-8 px-8 text-black bg-white mr-8 rounded-lg flex flex-col items-start text-left">
            <h1 className="text-3xl">Incredibly simple to integrate. </h1>
            <h1 className="text-3xl">So much easier for potential </h1>
            <h1 className="text-3xl">customers to navigate.</h1>

            <div className="py-14"></div>

            <div className="flex flex-row items-center self-start">
              <img
                src="data:image/png;base64,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"
                alt="judyco"
                className="rounded-full mr-6"
                height={50}
                width={50}
              ></img>

              <h1 className="text-xl underline underline-offset-4 ">
                <Link href="https://linkpop.com/judy">
                  <a className="flex flex-row items-center">
                    Judy. Co
                    <span className="">
                      <img
                        src="https://cdn.shopify.com/shopifycloud/linkpop/assets/reviewsArrow.46d4de92.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-8 px-8 text-black bg-white mr-8 rounded-lg">
            <h1 className="text-3xl">Every business needs a swift &</h1>
            <h1 className="text-3xl">efficient checkout process and</h1>
            <h1 className="text-3xl">Linkpop provides that with great</h1>
            <h1 className="text-3xl">ease.</h1>

            <div className="py-10"></div>

            <div className="flex flex-row items-center self-start">
              <img
                src="https://cdn.shopify.com/shopifycloud/linkpop/assets/netterImg.1f218e6a.png"
                alt="netergold"
                className="rounded-full mr-6"
                height={50}
                width={50}
              ></img>

              <h1 className="text-xl underline underline-offset-4 ">
                <Link href="https://linkpop.com/netergold">
                  <a className="flex flex-row items-center">
                    Neter Gold
                    <span className="">
                      <img
                        src="https://cdn.shopify.com/shopifycloud/linkpop/assets/reviewsArrow.46d4de92.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-8 px-8 text-black bg-white mr-8 rounded-lg">
            <h1 className="text-3xl">Linkpop has become a must-have </h1>
            <h1 className="text-3xl">in all our bios for social - the </h1>
            <h1 className="text-3xl">added option to have product </h1>
            <h1 className="text-3xl">pictures has helped drive sales.</h1>

            <div className="py-11"></div>

            <div className="flex flex-row items-center self-start">
              <img
                src="https://cdn.shopify.com/shopifycloud/linkpop/assets/stationImg.7ae3caeb.png"
                alt="station"
                className="rounded-full mr-6"
                height={50}
                width={50}
              ></img>

              <h1 className="text-xl underline underline-offset-4 ">
                <Link href="https://linkpop.com/stationcoldbrew">
                  <a className="flex flex-row items-center">
                    Station
                    <span className="">
                      <img
                        src="https://cdn.shopify.com/shopifycloud/linkpop/assets/reviewsArrow.46d4de92.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-8 px-8 text-black bg-white mr-8 rounded-lg">
            <h1 className="text-3xl">Linkpop makes is easy to share</h1>
            <h1 className="text-3xl">my blog posts and products in the</h1>
            <h1 className="text-3xl">same place in an organized</h1>
            <h1 className="text-3xl">fashion! It’s made a huge</h1>
            <h1 className="text-3xl">difference for my business.</h1>

            <div className="py-6"></div>

            <div className="flex flex-row items-center self-start">
              <img
                src="https://cdn.shopify.com/shopifycloud/linkpop/assets/laurenImg.8cc28860.png"
                alt="laurenfitfoodie"
                className="rounded-full mr-6"
                height={50}
                width={50}
              ></img>

              <h1 className="text-xl underline underline-offset-4 ">
                <Link href="https://linkpop.com/laurenfitfoodie">
                  <a className="flex flex-row items-center">
                    Lauren Fit Foodie
                    <span className="">
                      <img
                        src="https://cdn.shopify.com/shopifycloud/linkpop/assets/reviewsArrow.46d4de92.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="border-2 border-black py-8 px-8 text-black bg-white mr-8 rounded-lg">
            <h1 className="text-3xl">Linkpop was super fast and easy</h1>
            <h1 className="text-3xl">to set up. I love how it will elevate</h1>
            <h1 className="text-3xl">our customers' shopping</h1>
            <h1 className="text-3xl">experience from Instagram!</h1>

            <div className="py-11"></div>

            <div className="flex flex-row items-center self-start">
              <img
                src="https://cdn.shopify.com/shopifycloud/linkpop/assets/pinkImg.c404fda3.png"
                alt="pinkhouse"
                className="rounded-full mr-6"
                height={50}
                width={50}
              ></img>

              <h1 className="text-xl underline underline-offset-4 ">
                <Link href="https://linkpop.com/pinkhouse">
                  <a className="flex flex-row items-center">
                    Lauren Fit Foodie
                    <span className="">
                      <img
                        src="https://cdn.shopify.com/shopifycloud/linkpop/assets/reviewsArrow.46d4de92.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMarquee;
