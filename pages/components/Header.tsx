import React from "react";
import styles from "../../styles/Header.module.css";
// import Modal from "react-modal";
import { useState } from "react";
import { Portal } from "react-portal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Link from "next/link";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     padding: 0,
//   },
// };

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

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div
      id={styles.headerbackground}
      className="w-full border-b-2 px-8 py-10 border-black flex flex-col md:flex-row items-center justify-between"
    >
      <div>
        <img
          src="https://cdn.shopify.com/shopifycloud/linkpop/assets/logo.5a02db47.svg"
          alt=""
        />
      </div>

      <div className="px-6 flex flex-col items-center md:flex-row justify-between my-8 md:my-0">
        <div className="mr-0 md:mr-3">
          <button className="px-8 py-2 bg-transparent text-black rounded-full">
            <Link href="https://accounts.shopify.com/lookup?rid=1326f845-18a6-4bfc-bd5e-d21c27e5afc9">
              <a>Sign In</a>
            </Link>
          </button>
        </div>

        <div className="ml-0 md:ml-3">
          <button
            onClick={onOpenModal}
            id={styles.signupbutton}
            className="px-8 py-2 bg-blue-600 text-white rounded-full"
          >
            Sign Up Free
          </button>
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

      {/* <Portal>This text is portaled at the end of document.body!</Portal> */}

      {/* <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
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

            <button className="w-full p-4"></button>
          </div>

          <div className="w-1/3">
            <img
              src="https://cdn.shopify.com/shopifycloud/linkpop/assets/signupDesktopImg.bf66d05e.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default Header;
