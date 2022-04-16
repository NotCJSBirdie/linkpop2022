import React from "react";
import styles from "../../styles/GetStarted.module.css";
import Link from "next/link";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

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

const GetStarted = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div
      className="px-12 md:px-16 md:pl-28 py-10 pb-20 w-full"
      id={styles.getstartedbody}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="invisible">Invisible</div>

        <div className="">
          <img
            src="https://cdn.shopify.com/shopifycloud/linkpop/assets/callToActionTopIcon.f582ac21.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div
          className="border-4 border-black px-5 md:px-16 py-36 rounded-lg z-50 absolute w-3/4"
          id={styles.getstartedmodala}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
              More clicks and sales await
            </h1>

            <h1 className="px-4 md:px-16 text-lg md:text-3xl font-semibold text-center">
              Anyone can create a custom Linkpop page, from creators to business
              owners—power-up your social bio, on us.
            </h1>

            <div className="py-16">
              <div className="mb-10 flex flex-col items-center">
                <button
                  onClick={onOpenModal}
                  id={styles.getstartedbutton}
                  className="px-2 md:px-10 py-5 font-bold text-white border-4 border-black rounded-full text-md md:text-2xl text-center"
                >
                  Get Started Free
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <h1>
                  Already have an account?
                  <span className="underline underline-offset-4 mx-2">
                    <Link href="https://accounts.shopify.com/lookup?rid=19be5ce7-34ab-4bf5-a794-d38f3bc58788">
                      <a>Sign in</a>
                    </Link>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          id={styles.getstartedmodalb}
          className="border-4 border-black px-5 md:px-16 py-36 rounded-lg z-0 relative top-5 w-full md:w-5/6 md:left-16 left-5 md:visible invisible"
        >
          <div className="flex flex-col items-center invisible">
            <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center invisible">
              More clicks and sales await
            </h1>

            <h1 className="px-4 md:px-16 text-lg md:text-3xl font-semibold text-center invisible">
              Anyone can create a custom Linkpop page, from creators to business
              owners—power-up your social bio, on us.
            </h1>

            <div className="py-16 invisible">
              <div className="mb-10 flex flex-col items-center">
                <button
                  id={styles.getstartedbutton}
                  className="px-2 md:px-10 py-5 font-bold text-white border-4 border-black rounded-full text-md md:text-2xl text-center"
                >
                  Get Started Free
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <h1>
                  Already have an account?
                  <span className="underline underline-offset-4 mx-2">
                    Sign in
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <div className="">
          <img
            src="https://cdn.shopify.com/shopifycloud/linkpop/assets/callToActionBottomIcon.887187da.svg"
            alt=""
          />
        </div>

        <div className="invisible">Invisible</div>
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

export default GetStarted;
