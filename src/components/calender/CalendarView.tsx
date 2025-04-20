"use client";

import { useState } from "react";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function CalendarView() {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Content Calendar</h2>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDateRange(item.selection)}
        moveRangeOnFirstSelection={false}
        ranges={[dateRange]}
        className="w-full"
      />
    </div>
  );
}
