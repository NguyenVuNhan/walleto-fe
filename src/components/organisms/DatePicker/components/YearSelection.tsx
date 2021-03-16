import React, { FC, useContext } from "react";
import CalButton from "./CalButton";
import { DatePickerCtx } from "../DatePicker.context";
import Animation from "src/components/molecules/Animation";

const YearSelection: FC = () => {
  const {
    selectYear,
    prevDecade,
    nextDecade,
    visible: { year },
  } = useContext(DatePickerCtx);

  let years = [];
  let [minYear, maxYear] = [year - 6, year + 6];

  for (let i = minYear; i < maxYear; i++) {
    years.push(<CalButton onClick={() => selectYear(i)}>{i}</CalButton>);
  }

  return (
    <Animation className="h-48 calendar grid-cols-4">
      <div className="flex col-span-full">
        <CalButton chevron="left" onClick={prevDecade} />
        <CalButton className="flex-grow">
          {`${minYear} - ${maxYear - 1}`}
        </CalButton>
        <CalButton chevron="right" onClick={nextDecade} />
      </div>
      {years}
    </Animation>
  );
};

export default YearSelection;
