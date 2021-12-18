import dayjs from "dayjs";

export default function getMonth(month = dayjs().month()) {
  const year = dayjs().year();

  // get value of the first day of the month from dayjs object,
  // e.g: first day of december 2021 = wednesday => return 3
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  // display calendar start from sunday -> monday (replace 0 if don't want to start from sunday)
  // e.g: first day of december 2021 = wednesday
  // => need to display the days of previous month to fill the calendar (sunday, monday, tuesday)
  let currentDayCounter = 0 - firstDayOfTheMonth;

  // create new 2d array contain rows and cols
  // each row item is an array that contain value from sunday to saturday
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentDayCounter++;
      return dayjs(new Date(year, month, currentDayCounter));
    });
  });

  return daysMatrix;
}
