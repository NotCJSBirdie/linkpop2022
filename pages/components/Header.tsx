import React from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {
	return (
		<div
			id={styles.headerbackground}
			className="w-full border-b-2 px-8 py-10 border-black flex flex-row items-center justify-between"
		>
			<div>
				<img src="https://cdn.shopify.com/shopifycloud/linkpop/assets/logo.5a02db47.svg" alt="" />
			</div>

			<div className="px-6 flex flex-row justify-between">
				<div className="mr-3">
					<button className="px-8 py-2 bg-transparent text-black rounded-full">Sign In</button>
				</div>

				<div className="ml-3">
					<button id={styles.signupbutton} className="px-8 py-2 bg-blue-600 text-white rounded-full">
						Sign Up Free
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
