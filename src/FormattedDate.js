import React, { useEffect, useState } from "react";
import "./FormattedDate.css";
export default function FormattedDate() {
  let [timeState, setTimeState] = useState(formatCurrentTime());

  useEffect(() => {
    const refreshInterval = 60000;

    const interval = setInterval(() => {
      setTimeState(formatCurrentTime());
    }, refreshInterval);

    return () => clearInterval(interval);
  }, []);

  return <div className="FormattedDate">{timeState}</div>;
}

function formatCurrentTime() {
  let e = new Date();
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayN = dayName[e.getDay()];
  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthName[e.getMonth()];
  let hour = e.getHours();
  let minutes = e.getMinutes();
  let numberDate = e.getDate();
  let meridiem;
  if (hour > 12) {
    meridiem = "PM";
    hour = hour - 12;
  } else {
    meridiem = "AM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${month} ${numberDate}, ${dayN}, ${hour}:${minutes} ${meridiem}`;
}
