import { useEffect, useState } from "react";
import { getDateTime } from "../../utilities/datetime";

const DateTime = () => {
  const today = getDateTime();

  const [year, setYear] = useState(today.year);
  const [month, setMonth] = useState(today.month);
  const [date, setDate] = useState(today.date);
  const [day, setDay] = useState(today.day);
  const [hour, setHour] = useState(today.hour);
  const [min, setMin] = useState(today.min);
  const [period, setPeriod] = useState(today.period);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = getDateTime();
      setYear(now.year);
      setMonth(now.month);
      setDate(now.date);
      setDay(now.day);
      setHour(now.hour);
      setMin(now.min);
      setPeriod(now.period);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="my-5 flex items-baseline justify-between">
      <span className="text-lg font-bold">
        {hour}:{min} {period}
      </span>
      <span>
        {date} {month} {year}
      </span>
    </div>
  );
};

export default DateTime;
