import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "../../styles/FAQ1.module.css";

const FAQ1 = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [cross, setCross] = useState(false);

  return (
    <div className="px-10 py-10" id={styles.faq1body}>
      <div className="border-4 border-black bg-white text-black w-full">
        <div
          className="flex flex-row items-center justify-between px-10 py-10"
          {...getToggleProps({
            onClick: () => setCross(!cross),
          })}
        >
          <h1 className="text-4xl font-bold w-full">What is Linkpop?</h1>

          <div>
            {cross ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-minus"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
          </div>
        </div>

        <div className="w-full" {...getCollapseProps()}>
          <div className="w-full px-10">
            <p className="mb-10 text-xl font-semibold">
              Linkpop is a mobile-first, easy-to-use link in bio tool that lets
              you send your visitors and followers to a curated collection of
              all your best links. Use it anywhere to connect all your links in
              one place and build a strong, cohesive presence. Add links to your
              other social accounts, websites, YouTube channel, Spotify
              playlists—you name it.
            </p>

            <p className="mb-10 text-xl font-semibold">
              And because Linkpop is brought to you by Shopify, you’ll enjoy
              seamless integration with your Shopify store to promote your
              products, convert more visitors into customers, and make more
              sales. The best part is: you can do it all in seconds. Build a
              beautiful, custom link in bio page, click publish, and boom,
              you’re ready to go. Then, use Linkpop’s analytics to see how your
              page and links are performing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
