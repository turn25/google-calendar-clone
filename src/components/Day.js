import React, { useContext } from "react";
import dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion";
import GlobalContext from "../context/GlobalContext";

const formatDayChar = "ddd";
const formatDay = "DD";
const formatDate = "DD-MM-YY";

export default function Day({ day, rowIdx }) {
  const { monthIndex, isNextBtn } = useContext(GlobalContext);

  function todayClass() {
    return dayjs().format(formatDate) === day.format(formatDate)
      ? "bg-blue-500 text-white rounded-full w-7"
      : "hover:bg-gray-200 rounded-full w-7";
  }

  return (
    <div className="flex flex-col border border-gray-200">
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={monthIndex}
          initial={{ x: isNextBtn ? 50 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <header className="flex flex-col items-center">
            {rowIdx === 0 && (
              <p className="mt-1 text-sm font-bold text-gray-800 cursor-default">
                {day.format(formatDayChar).toUpperCase()}
              </p>
            )}
            <p
              className={`my-[0.5rem] p-1 text-sm text-center ${todayClass()} cursor-pointer transition ease-in-out hover:-translate-y-1 duration-200`}
            >
              {day.format(formatDay)}
            </p>
          </header>
          <div className="flex-1 cursor-pointer"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
