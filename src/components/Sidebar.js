import React, { useContext } from "react";
import CreateButton from "./CreateButton";
import SmallCalendar from "./SmallCalendar";
import FilterLabel from "./FilterLabel";
import CreateEventButton from "./CreateEventButton";
import GlobalContext from "../context/GlobalContext";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export default function Sidebar() {
  const { isShowSidebar } = useContext(GlobalContext);

  return (
    <div>
      <AnimatePresence>
        {isShowSidebar ? (
          <motion.div
            key={isShowSidebar}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.2 }}
            className="p-5 w-32 h-full lg:w-64"
          >
            <CreateButton />
            <SmallCalendar />
            <FilterLabel />
          </motion.div>
        ) : (
          <CreateEventButton />
        )}
      </AnimatePresence>
    </div>
  );
}
