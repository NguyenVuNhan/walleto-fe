import React, { memo } from "react";
import { getMonth, getWeekday } from "src/helpers/date";

interface Props {
  date: string;
  total: number;
}

const DateHeader = memo<Props>(({ date: dateStr, total }) => {
  const date = new Date(dateStr);
  const d = date.getUTCDate();
  const weekday = getWeekday(date.getUTCDay());
  const m = getMonth(date.getUTCMonth());
  const y = date.getUTCFullYear();

  return (
    <>
      <div className="p-2 text-onSurface">
        <p className="float-left mr-5 text-5xl">
          {d / 10 < 1 ? "0" + d : "" + d}
        </p>
        <p className="float-right my-2 text-2xl">{total}</p>
        <p className="font-medium ">{weekday}</p>
        <p className="font-medium text-onSurface text-opacity-50">{`${m} - ${y}`}</p>
      </div>
      <div className="divider"></div>
    </>
  );
});

export default DateHeader;
