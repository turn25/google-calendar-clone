import React from "react";
import Day from "./Day";

export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-rows-5 grid-cols-7">
      {/* map through the first array (5 rows) */}

      {month.map((row, i) => (
        <React.Fragment key={i}>
          {/* for each row, map through the second array to display all days of the weeks */}
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
