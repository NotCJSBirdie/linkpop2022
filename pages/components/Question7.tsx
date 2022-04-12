import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "../../styles/Question7.module.css";

const Question7 = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [cross, setCross] = useState(false);
  return (
    <div className="px-10 py-10" id={styles.question7body}>
      <div className="border-4 border-black bg-white text-black w-full">
        <div
          className="flex flex-row items-center justify-between px-10 py-10"
          {...getToggleProps({
            onClick: () => setCross(!cross),
          })}
        >
          <h1 className="text-4xl font-bold w-full">
            Where can you use a link in bio tool?
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
              Link in bio tools are specially designed for social media sites
              like Instagram and TikTok, where you can’t place links in the body
              of your posts, and you have a limited amount of space inside your
              profile bio. But now you can use a link in bio tool anywhere you
              want! Get creative by adding a unique QR code that sends followers
              to your link in bio page. You can also use the same QR code on
              your business card, printed poster…even a t-shirt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question7;
