import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "../../styles/Question5.module.css";

const Question5 = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [cross, setCross] = useState(false);

  return (
    <div className="px-10 py-10" id={styles.question5body}>
      <div className="border-4 border-black bg-white text-black w-full">
        <div
          className="flex flex-row items-center justify-between px-10 py-10"
          {...getToggleProps({
            onClick: () => setCross(!cross),
          })}
        >
          <h1 className="text-4xl font-bold w-full">
            How does link in bio work?
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
              A link in bio tool collects all your links under one URL, which is
              most commonly placed in the bio section of your Instagram or
              TikTok profile. When someone clicks the link, they’ll be able to
              see all the URLs that you’d like to promote, from your latest
              product release to your blog to your favorite song of the month.
            </p>

            <p className="mb-10 text-xl font-semibold">
              To create your own link in bio with Linkpop, just sign up, then
              copy and paste your top links, like your: Facebook, Instagram,
              Twitter, TikTok, LinkedIn, YouTube, Spotify playlists, Website,
              Blog posts, Digital wallet, Shopify Store.
            </p>

            <p className="mb-10 text-xl font-semibold">
              Once you’ve added all your links, customize your link in bio page
              until it perfectly suits your brand and image. Then click
              ‘Publish’, paste your finished URL into your social media bio, and
              you’re done! Connecting your online presence has never been so
              easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question5;
