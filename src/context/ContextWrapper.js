import React, { useState, useEffect, useReducer, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  //state = previous events, payload = new event
  function savedEventsReducer(state, { type, payload }) {
    switch (type) {
      case "push":
        return [...state, payload]; //return all previous events + new event (payload) to an array

      case "update":
        return state.map((event) =>
          event.id === payload.id ? payload : event
        ); // map through an array, only update new event that have id = event.id

      case "remove":
        return state.filter((event) => event.id !== payload.id); // return all previous events except for the payload event (event that need to be deleted)
      default:
        throw new Error();
    }
  }
  //init event load local storage data
  function initEvents() {
    const storageEvents = localStorage.getItem("SavedLocalStorageEvents");
    const parseEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parseEvents;
  }

  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  //handle framer motion style
  const [isNextBtn, setIsNextBtn] = useState(null);
  //handle show sidebar
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  //handle set selected day
  const [selectedDay, setSelectedDay] = useState(dayjs());
  //handle set small calendar month
  const [sidebarCalendarMonth, setSidebarCalendarMonth] = useState(null);
  //handle show modal
  const [isShowModal, setIsShowModal] = useState(false);
  //handle update form
  const [savedEvents, dispatchEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );
  //handle update selected event
  const [selectedEvent, setSelectedEvent] = useState(null);
  //handle set labels filter color
  const [labels, setLabels] = useState([]);

  // save new event to local storage when savedEvents changes
  useEffect(() => {
    localStorage.setItem(
      "SavedLocalStorageEvents",
      JSON.stringify(savedEvents)
    );
  }, [savedEvents]);

  //handle update labels filter list
  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((event) => event.label))].map(
        (label) => {
          const currentLabel = prevLabels.find((lbl) => lbl.label === label);
          return { label, checked: currentLabel ? currentLabel.checked : true };
        }
      );
    });
  }, [savedEvents]);

  function updateLabels(label, checked) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

  // async change on calendar when change month on sidebarCalendar (!== null -> when init don't do anything)
  useEffect(() => {
    if (sidebarCalendarMonth !== null) {
      setMonthIndex(sidebarCalendarMonth);
    }
  }, [sidebarCalendarMonth]);

  // cleaning data when close model
  useEffect(() => {
    if (!isShowModal) {
      setSelectedEvent(null);
    }
  }, [isShowModal]);

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
        sidebarCalendarMonth,
        setSidebarCalendarMonth,
        isShowModal,
        setIsShowModal,
        savedEvents,
        dispatchEvent,
        selectedEvent,
        setSelectedEvent,
        labels,
        setLabels,
        updateLabels,
        filteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
