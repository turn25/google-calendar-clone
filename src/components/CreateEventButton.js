import React from "react";

export default function CreateEventButton() {
  return (
    <button className="flex items-center p-2 border rounded-full shadow-lg hover:shadow-xl hover:bg-white transition ease-in-out duration-150 absolute mx-7 my-5">
      <img src="/assets/plus.svg" alt="plus_icon" className="w-10 h-10" />
    </button>
  );
}
