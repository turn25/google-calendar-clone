import React, { useContext } from "react";
import "./App.css";
import getMonth from "./util/getMonth";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import EventModal from "./components/EventModal";
import GlobalContext from "./context/GlobalContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const { monthIndex, isShowModal } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter initial={false}>
        {isShowModal && <EventModal />}
      </AnimatePresence>
      <div className="flex flex-col h-screen overflow-hidden">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={getMonth(monthIndex)} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
