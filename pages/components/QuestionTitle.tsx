import React from "react";
import styles from "../../styles/QuestionTitle.module.css";

const QuestionTitle = () => {
  return (
    <div className="py-10 px-10" id={styles.questiontitlebody}>
      <div className="flex flex-col items-center">
        <h1 className="flex flex-row items-center">
          <img
            src="https://cdn.shopify.com/shopifycloud/linkpop/assets/questionMark.26da6f03.svg"
            alt="questionmark"
            className="pr-6"
          />

          <span className="italic font-semibold pr-6 text-6xl">wt</span>

          <span className="font-bold text-6xl">FAQ</span>
        </h1>
      </div>
    </div>
  );
};

export default QuestionTitle;
