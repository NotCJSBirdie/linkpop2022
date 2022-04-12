import React from "react";
import Marquee from "react-fast-marquee";
import CommunityMarquee from "./CommunityMarquee";
import styles from "../../styles/Community.module.css";

const Community = () => {
  return (
    <div
      id={styles.communitybody}
      className="w-full py-20 px-10 overflow-hidden"
    >
      <div className="w-full text-center font-bold text-6xl">
        <h1>
          <img
            src="https://cdn.shopify.com/shopifycloud/linkpop/assets/communityIcon.5b7e1ab4.svg"
            alt="smile"
          />
          Join the community of
        </h1>
        <h1>
          <span className="underline underline-offset-4 decoration-blue-700">
            creators
          </span>{" "}
          using Linkpop
        </h1>
      </div>

      <div className="w-full py-20">
        <Marquee style={{ paddingTop: 50, paddingBottom: 50 }} gradient={false}>
          <CommunityMarquee />
        </Marquee>
      </div>
    </div>
  );
};

export default Community;
