import React, { FC, useContext } from "react";
import { MonthNames } from "src/constants/date.const";
import CalButton from "./CalButton";
import { DatePickerCtx } from "../DatePicker.context";
import Animation from "../Animation";

const MonthSelection: FC = () => {
  const { viewYears, selectMonth, nextYear, prevYear, visible } = useContext(
    DatePickerCtx
  );

  return (
    <Animation className="h-48 calendar grid-cols-4">
      <div className="flex col-span-full">
        <CalButton chevron="left" onClick={prevYear} />
        <CalButton className="flex-grow" onClick={viewYears}>
          {visible.year}
        </CalButton>
        <CalButton chevron="right" onClick={nextYear} />
      </div>
      {MonthNames.map((m, i) => (
        <CalButton onClick={() => selectMonth(i)}>
          {m.substring(0, 3)}
        </CalButton>
      ))}
    </Animation>
  );
};

export default MonthSelection;
