"use client";

import { useState } from "react";
import { SideBar } from "./side-bar";
import clsx from "clsx";

export function FloatAction() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(old => !old);
  return (
    <>
      <div
        onClick={handleClick}
        className="flex items-center justify-center fixed right-8 bottom-8 w-10 h-10 cursor-pointer rounded-full bg-neutral-900 shadow-lg md:hidden"
      >
        <svg
          className="w-4 h-4 fill-neutral-100"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4239"
          width="48"
          height="48"
        >
          <path d="M100.185088 101.376l835.15392 0c21.961728 0 39.769088 17.806336 39.769088 39.769088 0 21.961728-17.80736 39.768064-39.769088 39.768064L100.185088 180.913152C78.222336 180.914176 60.416 163.106816 60.416 141.145088 60.416 119.182336 78.222336 101.376 100.185088 101.376zM100.185088 419.529728l835.15392 0c21.961728 0 39.769088 17.80736 39.769088 39.769088 0 21.962752-17.80736 39.769088-39.769088 39.769088L100.185088 499.067904c-21.962752 0-39.769088-17.80736-39.769088-39.769088C60.416 437.337088 78.222336 419.529728 100.185088 419.529728zM100.185088 737.683456l835.15392 0c21.961728 0 39.769088 17.806336 39.769088 39.769088 0 21.961728-17.80736 39.769088-39.769088 39.769088L100.185088 817.221632c-21.962752 0-39.769088-17.80736-39.769088-39.769088C60.416 755.489792 78.222336 737.683456 100.185088 737.683456z"></path>
        </svg>
      </div>
      <div
        className={clsx("fixed top-0 bg-neutral-900 px-6 h-full w-72 py-6", visible ? "translate-x-0" : "-translate-x-full")}
      >
        <SideBar />
      </div>
    </>
  );
}
