import React from "react";
import dayjs from "dayjs";

export default function Day({ day, rowIdx }) {
  const formatDayChar = "ddd";
  const formatDay = "DD";

  function todayClass() {
    return dayjs().format("DD-MM-YY") === day.format("DD-MM-YY")
      ? "bg-blue-500 text-white rounded-full w-7"
      : "hover:bg-gray-200 rounded-full w-7";
  }

  return (
    <div className="flex flex-col border border-gray-200">
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
    </div>
  );
}
