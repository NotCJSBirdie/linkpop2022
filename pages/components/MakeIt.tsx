import React from "react";
import styles from "../../styles/MakeIt.module.css";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Link from "next/link";

const modalStyles = {
  modal: {
    padding: 0,
    borderRadius: 10,
  },
};

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-x"
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MakeIt = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <div
        id={styles.makeitbody}
        className="flex flex-col md:flex-row items-center w-full p-8 h-full"
      >
        <div className="order-last md:order-first w-full md:w-1/2 flex flex-col items-center">
          <video
            controls
            autoPlay
            className="md:m-0 md:my-0 my-20 border-4 border-black rounded-lg z-50"
            loop
          >
            <source
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/makeIt.28ff607f.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start justify-between h-full md:px-16 px-4">
          <div className="mb-10 md:mb-64 flex flex-row items-center">
            <h1 className="text-5xl md:text-6xl font-bold mr-4 md:mr-8">
              Make It
            </h1>

            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/makeItIcon.02b102a7.svg"
              alt="makeiticon"
            />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl mb-10">
              Start a free Linkpop page that curates everything you’re creating
              online. Highlight important content like your website, blog,
              playlists, and more—all from your link in bio.
            </p>

            <h1
              onClick={onOpenModal}
              id={styles.makeittext}
              className="text-lg md:text-3xl underline flex flex-row items-center"
            >
              Make your Linkpop page
              <span className="px-2">
                <img
                  src="https://cdn.shopify.com/shopifycloud/linkpop/assets/up-right-arrow.d428a60a.svg"
                  alt=""
                />
              </span>
            </h1>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={modalStyles}
        closeIcon={closeIcon}
      >
        <div className="flex flex-row items-center relative z-50">
          <div className="p-6 w-2/3 flex flex-col items-center ">
            <div className="mb-5">
              <img
                src="https://cdn.shopify.com/shopifycloud/linkpop/assets/logo.5a02db47.svg"
                alt=""
              />
            </div>

            <h1 className="text-center mb-5">
              Create a free Linkpop account, powered by Shopify.
            </h1>

            <label className="self-start">Email</label>

            <input
              className="w-full border-2 rounded-lg p-4 border-black bg-white"
              placeholder="johndoe@linkpop.com"
            ></input>

            <button
              id={styles.modalbutton}
              className="rounded-lg w-full p-4 my-4 text-white"
            >
              Sign up free
            </button>

            <h1 className="my-4 ">
              Already have an account?
              <span
                id={styles.logintext}
                className="px-2 underline underline-offset-4"
              >
                <Link href="https://accounts.shopify.com/lookup?rid=1326f845-18a6-4bfc-bd5e-d21c27e5afc9">
                  <a>Login</a>
                </Link>
              </span>
            </h1>

            <h1 className="text-center">
              By signing up, you agree to Linkpop’s
              <span className="px-2 underline underline-offset-4">
                <Link href="https://linkpop.com/terms">
                  <a>Terms of Service</a>
                </Link>
              </span>
              and
              <span className="px-2 underline underline-offset-4">
                <Link href="https://www.shopify.com/legal/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </span>
            </h1>
          </div>

          <div className="w-1/3">
            <div className="flex flex-row justify-between items-center absolute w-1/3">
              <div className="invisible">I am invisible</div>

              <div onClick={onCloseModal} className="p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/signupDesktopImg.bf66d05e.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MakeIt;
