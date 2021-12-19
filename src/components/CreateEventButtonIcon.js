import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function CreateEventButtonIcon() {
  const { isShowModal, setIsShowModal } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setIsShowModal(true)}
      className={`flex items-center p-2 border rounded-full shadow-lg hover:shadow-xl hover:bg-white transition ease-in-out duration-150 absolute mx-6 my-4 ${
        isShowModal && "bg-gray-200 hover:bg-gray-200"
      }`}
    >
      <img src="/assets/plus.svg" alt="plus_icon" className="w-10 h-10" />
    </button>
  );
}
