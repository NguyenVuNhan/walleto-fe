import { MonthNames, WeekDayNames } from "src/constants/date.const";

export const isLeapYear = (y: number): boolean => {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
};

export const getDaysInMonth = (m: number, y: number) => {
  switch (m) {
    case 1:
      return isLeapYear(y) ? 29 : 28;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    default:
      return 31;
  }
};

export const getWeekday = (date: number): WeekdayName => {
  try {
    return WeekDayNames[date];
  } catch {
    throw new Error("Invalid date");
  }
};

export const getMonth = (month: number): MonthName => {
  try {
    return MonthNames[month];
  } catch {
    throw new Error("Invalid month");
  }
};

export const getFirstWeekday = (m: number, y: number): number => {
  return new Date(y, m, 1).getDay();
};
