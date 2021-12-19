import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { motion } from "framer-motion";

export default function FilterLabel() {
  const { labels, updateLabels } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10 w-fit">
        Label
        {labels.map(({ label: lbl, checked }, i) => (
          <label key={i} className="items-center mt-3 flex flex-cols">
            <motion.input
              key={checked}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              transition={{ duration: 0.3, type: "easeInOut" }}
              type="checkbox"
              checked={checked}
              onChange={() => updateLabels({ label: lbl, checked: !checked })}
              className={`form-checkbox rounded h-5 w-5 mb-1 text-${lbl}-400 focus:ring-0 cursor-pointer`}
            />
            <motion.span
              key={checked === false}
              initial={{
                color: "#6172d0",
                x: -10,
                opacity: 0.2,
              }}
              animate={{
                color: "#4b5563",
                x: 0,
                opacity: 1,
              }}
              exit={{
                color: "#6b3280",
                x: 10,
                opacity: 0.2,
              }}
              transition={{ duration: 0.6, type: "easeInOut" }}
              className="ml-2 capitalize cursor-pointer "
            >
              {lbl}
            </motion.span>
          </label>
        ))}
      </p>
    </React.Fragment>
  );
}
