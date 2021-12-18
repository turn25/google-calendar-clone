import React, { useContext } from "react";
import Day from "./Day";
import { motion, AnimatePresence } from "framer-motion";
import GlobalContext from "../context/GlobalContext";

export default function Month({ month }) {
  const { monthIndex, isNextBtn } = useContext(GlobalContext);

  const variants = {
    hidden: { opacity: 0, x: isNextBtn ? 25 : -25 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -25 },
  };

  const Row = (props) => (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-7"
    >
      {props.children}
    </motion.div>
  );

  return (
    <div className="flex-1 grid grid-rows-5">
      {/* map through the first array (5 rows) */}
      <AnimatePresence initial={false}>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            <Row key={monthIndex}>
              {/* for each row, map through the second array to display all days of the weeks */}
              {row.map((day, idx) => (
                <Day day={day} key={idx} rowIdx={i} />
              ))}
            </Row>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
}
