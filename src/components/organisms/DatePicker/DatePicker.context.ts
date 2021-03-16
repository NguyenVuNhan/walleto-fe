import { createContext } from "react";

export type ViewState = "date" | "month" | "year";

export interface MonthYear {
  month: number;
  year: number;
}

export interface DatePickerContextType {
  date: Date | null;
  visible: MonthYear;
  view: ViewState;
  nextMonth: () => void;
  prevMonth: () => void;
  nextYear: () => void;
  prevYear: () => void;
  nextDecade: () => void;
  prevDecade: () => void;
  selectMonth: (m: number) => void;
  selectYear: (y: number) => void;
  selectDate: (d: number) => void;
  viewMonths: () => void;
  viewYears: () => void;
  isVisible: boolean;
  showCalendar: () => void;
  closeCalendar: () => void;
  toggleCalendar: () => void;
  isSelectedDate: (d: number) => boolean;
}

export const DatePickerCtx = createContext<DatePickerContextType>({
  date: new Date(),
  visible: {
    month: 0,
    year: 1970,
  },
  view: "date",
  nextMonth: () => {},
  prevMonth: () => {},
  nextYear: () => {},
  prevYear: () => {},
  nextDecade: () => {},
  prevDecade: () => {},
  selectMonth: (_) => {},
  selectYear: (_) => {},
  selectDate: (_) => {},
  viewMonths: () => {},
  viewYears: () => {},
  isVisible: false,
  showCalendar: () => {},
  closeCalendar: () => {},
  toggleCalendar: () => {},
  isSelectedDate: (_) => false,
});
