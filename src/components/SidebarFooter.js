import dayjs from "dayjs";
import React from "react";

export default function SidebarFooter() {
  return (
    <div className="absolute bottom-0 text-center left-0 w-64">
      <p className="text-center text-sm text-gray-500 hover:text-gray-800 transition ease-in-out">
        &copy;{dayjs().year()} Tuan Vu
      </p>
    </div>
  );
}
