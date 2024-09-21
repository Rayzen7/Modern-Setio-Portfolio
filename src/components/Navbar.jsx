/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import './CSS/style.css';

const FloatingNav = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [shows, setShows] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true); 
        } else {
          setVisible(false); 
        }
      }
    }
  });

  const toggleMenu = () => {
    setShows(!shows);
  }

  const visibilityClass = shows ? 'animate-moveBottom' : 'animate-moveTop';
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`fixed lg:mt-10 mt-0 top-0 z-50 lg:w-[420px] w-full px-10 py-5 bg-white lg:rounded-xl rounded-none shadow-lg ${className} lg:block flex justify-between items-start`}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)"
        }}
      >
        <ul className={`-mt-32 flex justify-center lg:gap-6 gap-4 lg:bg-transparent -z-10 lg:flex-row flex-col lg:pt-0 pt-1 ${visibilityClass}`}>
          <a href="#home" className="text-white hover:text-gray-300 cursor-pointer text-sm hover-navbar">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300 cursor-pointer text-sm hover-navbar">
            About
          </a>
          <a href="#projects" className="text-white hover:text-gray-300 cursor-pointer text-sm hover-navbar">
            Projects
          </a>
          <a href="#achievement" className="text-white hover:text-gray-300 cursor-pointer text-sm hover-navbar">
            Achievement
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 cursor-pointer text-sm hover-navbar">
            Contact
          </a>
        </ul>
        <i className="bx bx-list-ul float-right text-[30px] pt-1 list" onClick={toggleMenu}></i>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
