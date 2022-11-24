import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";

import "react-calendar/dist/Calendar.css";

const getDatesBetweenDates = (startDate, stopDate) => {
  var dateArray = new Array({});
  var currentDate = startDate;

  while (currentDate <= stopDate) {
    const date = { date: new Date(currentDate) };

    if (currentDate === startDate) {
      date.isArrivalDate = true;
    } else if (currentDate.isSame(stopDate)) {
      date.isDepartureDate = true;
    }

    dateArray.push(date);

    currentDate = dayjs(currentDate).add(1, "day");
  }

  return dateArray;
};

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch(`/api/rentlio`)
      .then((result) => result.json())
      .then((data) => {
        const expandedReservations =
          data.reservations &&
          data.reservations.map((reservation) => [
            getDatesBetweenDates(
              new Date(reservation.arrivalDate),
              new Date(reservation.departureDate)
            ),
          ]);

        setReservations(expandedReservations.flat().flat());
      })
      .catch(console.error);
  }, []);

  return (
    <div className="calendar">
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (!reservations) {
            return;
          }

          let currentDate = new Date(date);

          // selects all dates before now
          if (new Date(currentDate) <= new Date()) {
            return "past"; // this is css
          }

          const indexOfReservation = reservations.findIndex(
            (reservation) =>
              dayjs(reservation.date).format("DD-MM-YYYY") ===
              dayjs(currentDate).format("DD-MM-YYYY")
          );

          if (indexOfReservation > -1) {
            const reservation = reservations[indexOfReservation];

            if (reservation.isArrivalDate) {
              return "arrival";
            } else if (reservation.isDepartureDate) {
              return "departure";
            }

            return "reserved";
          }

          return "default";
        }}
      />
    </div>
  );
};

export default CalendarComponent;
