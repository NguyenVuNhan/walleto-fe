import { AnimatePresence } from "framer-motion";
import React, { forwardRef, HTMLAttributes, useContext } from "react";
import { DatePickerCtx } from "../DatePicker.context";
import DateSelection from "./DateSelection";
import MonthSelection from "./MonthSelection";
import YearSelection from "./YearSelection";

interface Props extends HTMLAttributes<HTMLDivElement> {
  placement: string;
}

const Calendar = forwardRef<HTMLDivElement, Props>(
  ({ placement, className, ...rest }, ref) => {
    const { view, closeCalendar } = useContext(DatePickerCtx);

    let selectionComponent = null;
    switch (view) {
      case "date":
        selectionComponent = <DateSelection />;
        break;
      case "month":
        selectionComponent = <MonthSelection />;
        break;
      case "year":
        selectionComponent = <YearSelection />;
        break;
    }

    return (
      <div
        {...rest}
        className={["w-full flex items-center justify-center", className].join(
          " "
        )}
        ref={ref}
        data-placement={placement}
      >
        <div className="bg-white shadow-lg max-w-xs w-64 p-2 rounded-lg ">
          <AnimatePresence>{selectionComponent}</AnimatePresence>
          <button className="float-right text-red-400" onClick={closeCalendar}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
);

export default Calendar;
