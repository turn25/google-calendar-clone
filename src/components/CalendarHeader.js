import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const {
    monthIndex,
    setMonthIndex,
    setIsNextBtn,
    isShowSidebar,
    setIsShowSidebar,
  } = useContext(GlobalContext);

  function handlePrevMonth() {
    setIsNextBtn(false);
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setIsNextBtn(true);
    setMonthIndex(monthIndex + 1);
  }

  // return current month if monthIndex === current month
  function handleResetMonth() {
    const currentMonth = dayjs().month();
    setMonthIndex(monthIndex === currentMonth ? monthIndex : currentMonth);
  }

  return (
    <header className="px-2 py-2 md:px-4 flex items-center h-[64px] justify-center md:justify-start">
      <button
        onClick={() => setIsShowSidebar(!isShowSidebar)}
        className="flex items-center mx-1"
      >
        <span className="material-icons text-gray-600 rounded-full p-3 hover:bg-gray-100 hover:text-gray-800">
          menu
        </span>
      </button>
      <img
        src="/assets/logo.png"
        alt="calendar_logo"
        className="h-12 w-12 opacity-90 hover:opacity-100 transition ease-in-out hidden md:block"
        draggable={false}
      />
      <h1 className="font-bold text-gray-500 text-xl mx-2 hover:text-gray-800 transition ease-in-out cursor-default hidden md:block">
        Calendar
      </h1>
      <button
        onClick={handleResetMonth}
        className="border py-2 px-4 font-semibold mx-3 md:mx-7 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded transition ease-in-out"
      >
        Today
      </button>
      <button onClick={handlePrevMonth} className="flex items-center mx-2">
        <span className="material-icons cursor-pointer text-gray-600 hover:bg-blue-500 hover:text-white rounded-full transition ease-in-out">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth} className="flex items-center mx-2">
        <span className="material-icons cursor-pointer text-gray-600 hover:bg-blue-500 hover:text-white rounded-full transition ease-in-out">
          chevron_right
        </span>
      </button>
      <h2 className="font-bold text-xl px-2 md:px-5 text-gray-500 hover:text-gray-800 transition ease-in-out cursor-default">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
