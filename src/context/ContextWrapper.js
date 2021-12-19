import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  //handle framer motion style
  const [isNextBtn, setIsNextBtn] = useState(null);
  //handle show sidebar
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  //handle set selected day
  const [selectedDay, setSelectedDay] = useState(dayjs());
  //handle set small calendar month
  const [smartCalendarMonth, setSmallCalendarMonth] = useState(null);
  //handle show modal
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (smartCalendarMonth !== null) {
      setMonthIndex(smartCalendarMonth);
    }
  }, [smartCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        isNextBtn,
        setIsNextBtn,
        isShowSidebar,
        setIsShowSidebar,
        selectedDay,
        setSelectedDay,
        smartCalendarMonth,
        setSmallCalendarMonth,
        isShowModal,
        setIsShowModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
