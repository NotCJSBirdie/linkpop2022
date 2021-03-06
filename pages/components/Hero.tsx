import React from "react";
import styles from "../../styles/Hero.module.css";
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

const Hero = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div
      id={styles.herobody}
      className="w-full overflow-hidden py-20 px-10 border-b-2 border-black"
    >
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 w-full flex flex-col items-start mr-8">
          <div className="text-5xl md:text-8xl mb-32">
            <h1 className="font-bold">Make your link in bio shoppable</h1>
          </div>

          <div className="text-2xl md:text-4xl mb-20">
            <h3>
              Turn your audience into customers through your social bio with
              Linkpop—a free link in bio tool designed for commerce, powered by
              Shopify’s fast and secure checkout.
            </h3>
          </div>

          <div className="text-sm md:text-xl">
            <div className="w-full md:w-5/6 flex flex-row items-center bg-white border-2 border-black rounded-full p-2 z-30 relative">
              <span>linkpop.com/</span>
              <span className="flex flex-row items-center">
                <input
                  className="text-sm md:text-xl text-black focus:outline-none w-full"
                  placeholder="yourname"
                ></input>
                <button
                  onClick={onOpenModal}
                  id={styles.buttonhero}
                  className="rounded-full text-white w-full p-2"
                >
                  Sign up for free
                </button>
              </span>
            </div>

            <div className="w-full md:w-5/6 flex flex-row items-center bg-black border-2 border-black rounded-full p-2 z-0 relative bottom-12 md:bottom-14 left-2">
              <span className="invisible">linkpop.com/</span>
              <span className="flex flex-row items-center invisible">
                <input
                  className="text-2xl text-black focus:outline-none w-full invisible"
                  placeholder="yourname"
                ></input>
                <button className="rounded-full text-white bg-blue-900 w-full p-2 invisible">
                  Sign up for free
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 w-full flex flex-col items-end">
          <img
            src="https://cdn.shopify.com/shopifycloud/linkpop/assets/phoneImg.e88b6c05.png"
            alt="phoneImg"
            className="h-full w-full"
          />
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

export default Hero;
