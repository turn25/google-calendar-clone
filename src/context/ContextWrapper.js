import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  //handle framer motion style
  const [isNextBtn, setIsNextBtn] = useState(null);
  //handle show sidebar
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        isNextBtn,
        setIsNextBtn,
        isShowSidebar,
        setIsShowSidebar,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
