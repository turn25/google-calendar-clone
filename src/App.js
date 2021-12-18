import React, { useContext } from "react";
import "./App.css";
import getMonth from "./util/getMonth";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";

function App() {
  const { monthIndex } = useContext(GlobalContext);

  return (
    <React.Fragment>
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
