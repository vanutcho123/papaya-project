import React from "react";
import { bars, logo, notification, video } from "../assets";
import styles from "../style";
import AvatarComp from "./AvatarComp";

const HeaderComp = () => {
  return (
    <header className="w-full sticky top-0 left-0 right-0 z-[1000] bg-[#1d1c34]">
      <div className={`${styles.flexCenterBetween} ${styles.paddingX} py-3 `}>
        <div className="flex items-center">
          <img
            src={bars}
            alt="bar"
            className="w-[20px] h-[20px] object-cover"
          />
          <a href="/" className="ml-3 w-[100px] h-[27px]">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </a>
        </div>

        <form className="flex items-center">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-[#2f3963] border-input text-white text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-[442px] px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Search..."
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium border-input
            text-gray-400 bg-[#2f3963] rounded-lg hover:border-blue-500 outline-none transition duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </form>

        <div className="flex items-center gap-4">
          <img
            src={video}
            alt="video"
            className="w-[28px] h-[20px] object-cover"
          />

          <img
            src={notification}
            alt="notification"
            className="w-[28px] h-[24px] object-cover"
          />

          <AvatarComp />
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
