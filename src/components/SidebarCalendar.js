import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import getMonth from "../util/getMonth";
import GlobalContext from "../context/GlobalContext";

const format = "MMMM YYYY";
const formatDate = "DD-MM-YY";

export default function SidebarCalendar() {
  const {
    monthIndex,
    setIsNextBtn,
    selectedDay,
    setSelectedDay,
    setSidebarCalendarMonth,
  } = useContext(GlobalContext);

  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  // update current month in small calendar changes
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  // update current month index if value of monthIndex (in GlobalContext) changes
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function currentDayClass(currDay) {
    const nowDay = dayjs().format(formatDate);
    const currentDay = currDay.format(formatDate);
    const slcDay = selectedDay.format(formatDate);
    if (nowDay === currentDay)
      return "bg-blue-500 rounded-full text-white hover:bg-blue-600";
    else if (currentDay === slcDay)
      return "bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200";
    else return "rounded-full hover:bg-gray-200";
  }

  function handlePrevMonth() {
    setIsNextBtn(false);
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setIsNextBtn(false);
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  return (
    <div className="my-8 mx-1">
      <header className="flex justify-between items-center ">
        <p className="text-gray-500 font-bold text-lg cursor-default hover:text-gray-800 transition ease-in-out">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(format)}
        </p>

        <div className="flex flex-1 justify-end">
          <button onClick={handlePrevMonth} className="flex items-center mx-1">
            <span className="pr-[1px] material-icons cursor-pointer text-gray-600 hover:bg-blue-500 hover:text-white rounded-full transition ease-in-out">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth} className="flex items-center mx-1">
            <span className="pl-[1px] material-icons cursor-pointer text-gray-600 hover:bg-blue-500 hover:text-white rounded-full transition ease-in-out">
              chevron_right
            </span>
          </button>
        </div>
      </header>

      {/* sidebar calendar */}
      <div className="grid grid-rows-6 grid-cols-7 my-2">
        {/* display days label */}
        {currentMonth[0].map((day, i) => (
          <span
            key={i}
            className="flex items-center justify-center text-sm text-gray-600 my-1 hover:text-gray-800 transition ease-in-out cursor-default"
          >
            {day.format("dd")}
          </span>
        ))}
        {/* display days view */}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedDay(day);
                  setSidebarCalendarMonth(currentMonthIdx);
                }}
                className={`w-full ${currentDayClass(
                  day
                )} transition ease-in-out`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
