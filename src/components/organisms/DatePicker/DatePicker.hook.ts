import { useEffect, useState } from "react";
import {
  DatePickerContextType,
  MonthYear,
  ViewState,
} from "./DatePicker.context";

const useDatePickerCtx = <T extends HTMLElement>(
  date: Date,
  onChange: (d: Date) => void,
  ref: React.MutableRefObject<T | null>
): DatePickerContextType => {
  const [monthYear, setMonthYear] = useState<MonthYear>({
    month: date?.getMonth() ?? new Date().getMonth(),
    year: date?.getFullYear() ?? new Date().getFullYear(),
  });
  const [view, setView] = useState<ViewState>("date");
  const [isVisible, setVisible] = useState<boolean>(false);

  const selectDate = (d: number) => {
    const selectDate = new Date(monthYear.year, monthYear.month, d);
    onChange(selectDate);
    setVisible(false);
  };

  const isSelectedDate = (d: number): boolean => {
    if (
      d === date.getDate() &&
      monthYear.month === date.getMonth() &&
      monthYear.year === date.getFullYear()
    ) {
      return true;
    }
    return false;
  };

  const selectMonth = (m: number) => {
    setMonthYear((state) => ({ ...state, month: m }));
    setView("date");
  };

  const selectYear = (y: number) => {
    setMonthYear((state) => ({ ...state, year: y }));
    setView("month");
  };

  useEffect(() => {
    function mouseDownListener(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false);
      }
    }

    if (isVisible) {
      setMonthYear({ month: date.getMonth(), year: date.getFullYear() });
      document.addEventListener("mousedown", mouseDownListener);
    }

    return () => {
      document.removeEventListener("mousedown", mouseDownListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return {
    date,
    visible: monthYear,
    view,
    nextMonth: () =>
      setMonthYear((state) =>
        state.month >= 11
          ? { month: 0, year: state.year + 1 }
          : { month: state.month + 1, year: state.year }
      ),
    prevMonth: () =>
      setMonthYear((state) =>
        state.month <= 0
          ? { month: 11, year: state.year - 1 }
          : { month: state.month - 1, year: state.year }
      ),
    nextYear: () =>
      setMonthYear((state) => ({ ...state, year: state.year + 1 })),
    prevYear: () =>
      setMonthYear((state) => ({ ...state, year: state.year - 1 })),
    nextDecade: () =>
      setMonthYear((state) => ({ ...state, year: state.year + 12 })),
    prevDecade: () =>
      setMonthYear((state) => ({ ...state, year: state.year - 12 })),
    selectMonth,
    selectYear,
    selectDate,
    viewMonths: () => setView("month"),
    viewYears: () => setView("year"),
    isVisible,
    showCalendar: () => setVisible(true),
    closeCalendar: () => setVisible(false),
    toggleCalendar: () => setVisible((state) => !state),
    isSelectedDate,
  };
};

export default useDatePickerCtx;
