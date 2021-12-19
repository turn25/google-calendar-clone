import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { motion } from "framer-motion";

const formatDate = "dddd, MMMM YYYY";

const formatDay = "DD-MM-YYYY";

const LabelsGroup = [
  "red",
  "amber",
  "green",
  "blue",
  "indigo",
  "purple",
  "gray",
];

export default function EventModal() {
  const {
    isShowModal,
    setIsShowModal,
    selectedDay,
    dispatchEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelecetedLabel] = useState(
    selectedEvent.label
      ? LabelsGroup.find((lbl) => lbl === selectedEvent.label)
      : LabelsGroup[0]
  );
  const [isDisabled, setIsDisabled] = useState(false);

  //handle disabled submit button class
  function handleDisabledClass() {
    return isDisabled
      ? "cursor-not-allowed bg-gray-500 hover:bg-gray-400"
      : "bg-blue-500 hover:bg-blue-600 ";
  }

  useEffect(() => {
    if (title === "" || description === "") {
      setIsDisabled(true);
    } else setIsDisabled(false);
  }, [title, description]);

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: selectedDay.valueOf(), // use valueOf instead of value because value will return a dayjs object that can't be stringify
      id: selectedEvent ? selectedEvent.id : Date.now(), // unique value
    };
    if (selectedEvent)
      dispatchEvent({ type: "update", payload: calendarEvent });
    else dispatchEvent({ type: "push", payload: calendarEvent });
    setIsShowModal(false);
  }

  function handleRemoveItem() {
    dispatchEvent({ type: "remove", payload: selectedEvent });
    setIsShowModal(false);
  }

  return (
    <motion.div
      key={isShowModal}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-center items-center h-screen w-full fixed top-0 left-0 z-10 noselect" //add disable mouse hightlight class
    >
      <form className="bg-white w-100 shadow-2xl rounded-lg lg:w-1/4 md:1/3">
        <header className="bg-gray-100 flex justify-between items-center px-4 py-2">
          <span className="material-icons text-gray-400 cursor-default">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={handleRemoveItem}
                className="material-icons customIcon"
              >
                delete
              </span>
            )}
            <span
              onClick={() => setIsShowModal(false)}
              className="material-icons customIcon"
            >
              close
            </span>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-center gap-y-4">
            <div></div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add title"
              required
              className="p-2 w-full text-gray-600 text-bold text-lg border-0 border-gray-200 border-b-2 focus:ring-0 focus:outline-none focus:border-blue-500 hover:border-blue-200 transition ease-in-out"
            />

            <span className="material-icons text-gray-400 cursor-default">
              schedule
            </span>

            <p className="text-gray-600 p-2 w-full cursor-default hover:text-gray-900 hover:bg-gray-100 rounded-md transition ease-in-out">
              {selectedDay.format(formatDate)}
            </p>

            <span className="material-icons text-gray-400 cursor-default">
              alarm
            </span>
            <p className="text-gray-600 p-2 w-full cursor-default hover:text-gray-900 hover:bg-gray-100 rounded-md transition ease-in-out">
              <span
                className={`border-b-[1px] border-transparent hover:border-gray-500 transition ease-in-out delay-150`}
              >
                {selectedDay.format(formatDay)}
              </span>
            </p>

            <span className="material-icons text-gray-400 cursor-default">
              subject
            </span>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description"
              required
              className="bg-gray-100 rounded-t-md p-2 w-full h-12 text-gray-500 text-bold border-0 border-gray-200 border-b-2 focus:ring-0 focus:outline-none focus:border-blue-500 hover:border-blue-200 transition ease-in-out"
            />

            <span className="material-icons text-gray-400 cursor-default">
              bookmark_border
            </span>
            <div className="flex gap-x-2 my-2">
              {LabelsGroup.map((color, i) => (
                <span
                  key={i}
                  onClick={() => setSelecetedLabel(color)}
                  className={`w-6 h-6 bg-${color}-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition ease-in-out`}
                >
                  {selectedLabel === color && (
                    <span className="material-icons text-sm text-white">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end items-center p-3 mt-4">
          <button
            onClick={handleSubmit}
            className={`rounded text-white px-8 py-2 ${handleDisabledClass()}`}
            disabled={isDisabled}
          >
            Save
          </button>
        </footer>
      </form>
    </motion.div>
  );
}
