import React from "react";
import styles from "../../styles/Create.module.css";
import Marquee from "react-fast-marquee";
import MarqueeContent from "./MarqueeContent";

const Create = () => {
  return (
    <div id={styles.createbody} className="w-full py-20 px-10 overflow-hidden">
      <div className="w-full text-center font-bold text-7xl">
        <h1>Create a free page with</h1>
        <h1>your top links in minutes</h1>
      </div>

      <div className="w-full py-20">
        <Marquee style={{ paddingTop: 50, paddingBottom: 50 }} gradient={false}>
          <MarqueeContent />
        </Marquee>
      </div>
    </div>
  );
};

export default Create;
