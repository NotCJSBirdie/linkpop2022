import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "../../styles/Question10.module.css";

const Question10 = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [cross, setCross] = useState(false);
  return (
    <div className="px-10 py-10" id={styles.question10body}>
      <div className="border-4 border-black bg-white text-black w-full">
        <div
          className="flex flex-row items-center justify-between px-10 py-10"
          {...getToggleProps({
            onClick: () => setCross(!cross),
          })}
        >
          <h1 className="text-4xl font-bold w-full">
            Do I need to be a Shopify merchant to use shoppable links?
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
              You don’t need a Shopify store to use Linkpop. Linkpop is free to
              anyone who signs up, with no trial or expiry date. The signup
              process for Linkpop is made possible by Shopify but don’t worry,
              you won’t be creating a Shopify store, just an account that lets
              you access all the great features offered by Linkpop.
            </p>

            <p className="mb-10 text-xl font-semibold">
              If you want to use shoppable links, this requires a Shopify
              subscription, which starts as low as $9 per month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question10;
