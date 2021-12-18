import React from "react";

export default function CreateButton() {
  return (
    <button className="flex items-center p-2 border rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition ease-in-out duration-150">
      <img src="/assets/plus.svg" alt="plus_icon" className="w-8 h-8" />
      <span className="px-3 text-gray-700">Create</span>
      <span className="material-icons pr-3 text-gray-700 opacity-70">
        expand_more
      </span>
    </button>
  );
}
