/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import './CSS/style.css';

const FloatingNav = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

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
        className={`fixed mt-10 top-0 z-50 w-[420px] px-10 py-5 bg-white rounded-lg shadow-lg ${className}`}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <ul className="flex justify-center gap-6">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
