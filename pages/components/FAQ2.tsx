import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "../../styles/FAQ2.module.css";

const FAQ2 = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [cross, setCross] = useState(false);

  return (
    <div className="px-10 py-10" id={styles.faq2body}>
      <div className="border-4 border-black bg-white text-black w-full">
        <div
          className="flex flex-row items-center justify-between px-10 py-10"
          {...getToggleProps({
            onClick: () => setCross(!cross),
          })}
        >
          <h1 className="text-4xl font-bold w-full">
            What are shoppable links?
          </h1>

          <div className="rounded-full bg-blue-500 p-2">
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
              Shoppable links make it easy for users to shop while they’re
              browsing social media. While it may sound complicated, it’s simple
              to set up if you have the right link in bio tool. With Linkpop,
              shoppable links are fully integrated with your Shopify store.
              They’re powered by Shopify’s fast and secure checkout, which is
              trusted by millions of merchants around the world. Guide your
              Linkpop visitors to checkout in just three clicks.
            </p>

            <p className="mb-10 text-xl font-semibold">
              If you sell products or services online, or you’re planning to
              start, shoppable links are an amazing way to grow your sales. They
              allow you to lead customers to specific pages and products at the
              exact moment of interest in their feed, then transform them from a
              visitor to a customer in seconds. If you’re not using shoppable
              links, you’re missing out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ2;
