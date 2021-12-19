import React from "react";

// create global context to use around all the app
const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (idx) => {},
  isNextBtn: null,
  setIsNextBtn: () => {},
  isShowSidebar: true,
  setIsShowSidebar: () => {},
  selectedDay: null,
  setSelectedDay: (day) => {},
  smallCalendarMonth: 0,
  setSidebarCalendarMonth: (idx) => {},
  isShowModal: false,
  setIsShowModal: () => {},
  savedEvents: [],
  dispatchEvent: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabels: () => {},
  filteredEvents: [],
});

export default GlobalContext;
