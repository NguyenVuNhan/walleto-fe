import React, { useRef } from "react";
import CalendarTodayIcon from "src/assets/Icons/CalendarToday";
import { MonthNames } from "src/constants/date.const";
import Calendar from "./components/Calendar";
import { DatePickerCtx } from "./DatePicker.context";
import useDatePickerCtx from "./DatePicker.hook";

interface Props {
  date: Date;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<Props> = ({ date, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const ctxValue = useDatePickerCtx(date, onChange, ref);

  const formattedDate = (date: Date): string => {
    return `${date.getDate()} ${
      MonthNames[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  return (
    <DatePickerCtx.Provider value={ctxValue}>
      <div className="flex relative" ref={ref}>
        <button
          className="flex items-center justify-center p-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-l focus:outline-none"
          onClick={ctxValue.toggleCalendar}
        >
          <CalendarTodayIcon />
        </button>
        <input
          className="flex-grow px-3 text-black border-2 rounded-r outline-none focus:border-gray-400"
          type="text"
          onFocus={ctxValue.showCalendar}
          value={formattedDate(date)}
          readOnly
        />
        {!ctxValue.isVisible ? null : (
          <Calendar
            className="absolute z-10 mt-1 top-full"
            placement="bottom-start"
            ref={ref}
          />
        )}
      </div>
    </DatePickerCtx.Provider>
  );
};

export default DatePicker;
