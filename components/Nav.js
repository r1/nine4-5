/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let easing = [0.6, 0.05, 0.01, 0.99];

  const fadeInUp = {
    hidden: { opacity: 0 },
    initial: {
      y: 60,
      opacity: 1,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: easing,
      },
    },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={fadeInUp}
        className="roboto-regular mx-auto flex max-w-[100rem] flex-col px-4 pt-4 text-[#ffffff] md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
      >
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="focus:shadow-outline rounded-lg text-lg font-semibold tracking-widest focus:outline-none"
          >
            <h2 className="text-4xl tracking-tighter">NINE4</h2>
          </a>
          <button
            className="cursor-pointer px-3 leading-none outline-none focus:outline-none md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "mt-3 flex-grow items-start md:flex lg:mt-0" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="flex-col pl-4 text-xl md:flex-grow md:pl-0">
            <ul className="flex flex-grow flex-wrap items-center justify-end gap-6 space-x-6 pr-4">
              <li>
                <a href="/" className="text-lg">
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="rounded-md border-2 bg-white px-4 py-3 text-lg text-black"
                >
                  Try For Free
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
