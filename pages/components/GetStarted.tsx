import React from "react";
import styles from "../../styles/GetStarted.module.css";

const GetStarted = () => {
  return (
    <div
      className="px-12 md:px-16 md:pl-28 py-10 pb-20 w-full"
      id={styles.getstartedbody}
    >
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
    </div>
  );
};

export default GetStarted;
