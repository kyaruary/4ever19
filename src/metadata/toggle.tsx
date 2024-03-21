"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
type Props = {
  defaultChecked?: boolean;
  id?: string;
  name?: string;
};

export function Toggle(props: Props) {
  const [checked, setChecked] = useState(props.defaultChecked);
  return (
    <>
      <input type="checkbox" className="hidden" name={props.name} id={props.id} checked={checked} />
      <label
        htmlFor={props.id}
        onClick={() => {
          setChecked(old => !old);
        }}
        className={clsx(
          "cursor-pointer flex items-center justify-center w-[2.625em] h-[1.25em] rounded-full overflow-hidden text-size-16",
          !checked ? "bg-primary bg-opacity-[0.1]" : "bg-primary"
        )}
        aria-roledescription="toggle"
      >
        <motion.div
          className={clsx("px-[0.125em] w-full box-border")}
          animate={{
            x: checked ? "50%" : 0,
          }}
          initial={false}
        >
          <motion.div className={clsx("w-[1em] h-[1em] rounded-full", "bg-n-5")} />
        </motion.div>
      </label>
    </>
  );
}
