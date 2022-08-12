/** @format */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "phosphor-react";
import { GithubLogo, Package } from "phosphor-react";

const Dropdown = ({ title, description, subtitle }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="w-[280px] md:w-[350px] bg-white block rounded-[16px]"
        onClick={() => toggleOpen(!isOpen)}
        animate={{ height: isOpen ? "auto" : "64px" }}
        style={{ overflow: "hidden", height: "64px" }}
        initial={{ height: 64 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-[15px] flex justify-between items-center rounded-[16px]">
          <div>
            <p
              className="text-[18px] font-[800] tracking-[-0.5px] leading-[1.1rem]"
              style={{ fontFamily: "Be Vietnam Pro, sans-serif" }}
            >
              {title}
            </p>
            {subtitle === "chess" ? (
              <div className="flex gap-1 mt-[3px]">
                <a
                  className=""
                  href="https://github.com/octaviandd/Chess/tree/master/chess-react"
                >
                  <GithubLogo size={20} color="#aa7941" />
                </a>
                <a className="" href="https://react-chessgame.netlify.app/">
                  <Package size={20} color="#aa7941" />
                </a>
              </div>
            ) : subtitle === "latergram" ? (
              <div className="flex gap-1 mt-[3px]">
                <a href="https://github.com/octaviandd/LaterGRAM">
                  <GithubLogo size={20} color="#aa7941" />
                </a>
                <a className="" href="https://laterrgram.herokuapp.com">
                  <Package size={20} color="#aa7941" />
                </a>
              </div>
            ) : subtitle === "spotifier" ? (
              <div className="flex gap-1 mt-[3px]">
                <a href="https://github.com/octaviandd/Spotifier">
                  <GithubLogo size={20} color="#aa7941" />
                </a>
                <a className="" href="https://ilikespotify.herokuapp.com/">
                  <Package size={20} color="#aa7941" />
                </a>
              </div>
            ) : (
              <span className="text-[#666666] text-[14px]">{subtitle}</span>
            )}
          </div>

          <motion.span
            className="w-[24px] h-[24px]"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            <CaretDown size={24} fill="rgb(102,102,102)" />
          </motion.span>
        </div>
        <div className="pt-[10px] pb-[20px] px-[20px]">
          {subtitle === "spotifier" ||
          subtitle === "latergram" ||
          subtitle === "09/2016 - 09/2019" ||
          subtitle === "01/2021 - 01/2022" ||
          subtitle === "chess" ? (
            <span className="text-[#666666]">{description}</span>
          ) : (
            <ul className="list-disc">
              {description
                .split(".")
                .slice(0, -1)
                .map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Dropdown;
