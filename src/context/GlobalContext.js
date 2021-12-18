import React from "react";

// create global context to use around all the app
const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (idx) => {},
  isNextBtn: null,
  setIsNextBtn: () => {},
  isShowSidebar: true,
  setIsShowSidebar: () => {},
});

export default GlobalContext;
