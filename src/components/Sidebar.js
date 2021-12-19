import React, { useContext } from "react";
import CreateEventButton from "./CreateEventButton";
import SidebarCalendar from "./SidebarCalendar";
import FilterLabel from "./FilterLabel";
import CreateEventButtonIcon from "./CreateEventButtonIcon";
import SidebarFooter from "./SidebarFooter";
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
      <AnimatePresence exitBeforeEnter initial={false}>
        {isShowSidebar ? (
          <motion.div
            key={isShowSidebar}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.2 }}
            className="p-5 hidden md:block h-full w-64 relative"
          >
            <CreateEventButton />
            <SidebarCalendar />
            <FilterLabel />
            <SidebarFooter />
          </motion.div>
        ) : (
          <motion.div
            key={isShowSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            variants={variants}
            transition={{ duration: 0.2 }}
          >
            <CreateEventButtonIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
