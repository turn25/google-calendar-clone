import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion";
import GlobalContext from "../context/GlobalContext";

const formatDayChar = "ddd";
const formatDay = "DD";
const formatDate = "DD-MM-YY";

export default function Day({ day, rowIdx }) {
  const {
    monthIndex,
    isNextBtn,
    setIsShowModal,
    setSelectedDay,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  const [dayEventItems, setDayEventItems] = useState([]);

  // whenever day(month), savedEvents change
  // => filter all items that store in savedEvents then set to dayEventsItems array
  useEffect(() => {
    const events = filteredEvents.filter(
      (event) => dayjs(event.day).format(formatDate) === day.format(formatDate)
    );
    setDayEventItems(events);
  }, [filteredEvents, day]);

  function todayClass() {
    return dayjs().format(formatDate) === day.format(formatDate)
      ? "bg-blue-500 text-white rounded-full w-7"
      : "hover:bg-gray-200 rounded-full w-7";
  }

  return (
    <div className="flex flex-col border border-gray-200 overflow-auto scrollbar-hide">
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={monthIndex}
          initial={{ x: isNextBtn ? 50 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col flex-1"
        >
          <header className="flex flex-col items-center">
            {rowIdx === 0 && (
              <p className="mt-1 text-sm font-bold text-gray-800 cursor-default">
                {day.format(formatDayChar).toUpperCase()}
              </p>
            )}
            <p
              onClick={() => setSelectedDay(day)}
              className={`my-[0.5rem] p-1 text-sm text-center ${todayClass()} cursor-pointer transition ease-in-out hover:-translate-y-1 duration-200`}
            >
              {day.format(formatDay)}
            </p>
          </header>
          <div
            onClick={() => {
              setIsShowModal(true);
              setSelectedDay(day);
            }}
            className="flex flex-col flex-1 cursor-pointer"
          >
            <div className="overflow-y-scroll scrollbar-hide h-[calc(100vh-64px)/5]">
              <AnimatePresence>
                {dayEventItems.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedEvent(event)}
                    className={`relative rounded pl-3 pr-2 pt-1 my-2 mr-2 ml-[0.1rem] text-sm text-gray-600 bg-${event.label}-300 opacity-95 shadow-sm hover:opacity-100 hover:text-gray-800 hover:shadow:md`}
                  >
                    <span
                      className={`absolute top-0 left-0 bg-${event.label}-500 h-full w-2 rounded-l opacity-100`}
                    />
                    {event.title}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
