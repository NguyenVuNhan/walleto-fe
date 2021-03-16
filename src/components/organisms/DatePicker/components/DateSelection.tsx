import React, { FC, useContext } from "react";
import { MonthNames, WeekDayNames } from "src/constants/date.const";
import { getDaysInMonth, getFirstWeekday } from "src/helpers/date";
import CalButton from "./CalButton";
import { DatePickerCtx } from "../DatePicker.context";
import Animation from "../Animation";

const DateSelection: FC = () => {
  const {
    nextMonth,
    prevMonth,
    viewMonths,
    selectDate,
    visible: { month, year },
    isSelectedDate,
  } = useContext(DatePickerCtx);

  const dates = [];

  for (let i = 0; i < getFirstWeekday(month, year); i++) {
    dates.push(<div key={`empty-${i}`}></div>);
  }

  for (let i = 1; i <= getDaysInMonth(month, year); i++) {
    dates.push(
      <CalButton
        key={`day-${i}`}
        className={[
          "hover:bg-gray-200 rounded p-1 text-sm text-center",
          isSelectedDate(i) ? "bg-gray-300 font-semibold" : "",
        ].join(" ")}
        onClick={() => selectDate(i)}
      >
        {i}
      </CalButton>
    );
  }

  return (
    <Animation className="calendar grid-cols-7">
      <div className="flex h-8 col-span-full">
        <CalButton chevron="left" onClick={prevMonth} />
        <CalButton className="flex-grow" onClick={viewMonths}>
          {`${year} - ${MonthNames[month]}`}
        </CalButton>
        <CalButton chevron="right" onClick={nextMonth} />
      </div>

      {WeekDayNames.map((day) => (
        <div
          key={(200 + day).toString()}
          className="p-1 text-sm font-semibold"
          style={{ textAlign: "center" }}
        >
          {day[0]}
        </div>
      ))}

      {dates}
    </Animation>
  );
};

export default DateSelection;
