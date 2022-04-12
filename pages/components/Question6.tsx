import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "../../styles/Question6.module.css";

const Question6 = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [cross, setCross] = useState(false);
  return (
    <div className="px-10 py-10" id={styles.question6body}>
      <div className="border-4 border-black bg-white text-black w-full">
        <div
          className="flex flex-row items-center justify-between px-10 py-10"
          {...getToggleProps({
            onClick: () => setCross(!cross),
          })}
        >
          <h1 className="text-4xl font-bold w-full">
            What does link in bio mean?
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
              “Link in bio” is a term used by creators, influencers, and brands
              on social media platforms like Instagram and TikTok. These sites
              have short bio sections and don’t allow users to include links in
              the description of individual posts. So when someone writes “link
              in bio” in a post, they’re directing you to their profile bio,
              where you’ll find a link to more information outside of the
              platform.
            </p>

            <p className="mb-10 text-xl font-semibold">
              Today, we refer to link in bio as the place to upload and connect
              all your top links with just one URL. For example, a foodie
              influencer posts a photo of a delicious recipe they created, then
              writes “link in bio” in the post. You’ll be able to go to their
              profile bio, click the link in bio URL, and see the full
              step-by-step recipe on their website or YouTube channel (or
              wherever they lead you!). Link in bio tools have been a total
              game-changer for sharing content with your visitors and followers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question6;
