import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { Image } from "react-bootstrap";
import dayjs from "dayjs";
import { isMobile } from "react-device-detect";
import Button from "react-bootstrap/Button";

import "react-calendar/dist/Calendar.css";

const isStartDate = (dates, currentIndex) => {
  if (dates[currentIndex - 1]?.availability === 1) {
    return true;
  }

  return false;
};

const isEndDate = (dates, currentIndex) => {
  if (
    dates[currentIndex - 1] &&
    dates[currentIndex]?.availability === 1 &&
    dates[currentIndex - 1]?.availability !== 1
  ) {
    return true;
  }

  return false;
};

const calendarAdditionalSettings = {};

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [currentDates, setCurrentDates] = useState([
    dayjs(),
    dayjs().add(2, "month"),
  ]);

  useEffect(() => {
    fetch(`/api/rentlio?dateFrom=${currentDates[0]}&dateTo=${currentDates[1]}`)
      .then((result) =>
        result.json().then((data) => {
          setReservations(data);
        })
      )
      .catch();
  }, [setReservations, currentDates]);

  const onActiveStartDateChange = ({ activeStartDate }) =>
    setCurrentDates([
      dayjs(activeStartDate),
      dayjs(activeStartDate).add(2, "month"),
    ]);

  return (
    <section className="bg-white position-relative pt-200 fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="kabout mb-50">
              <div className="section-title-wrapper mb-45">
                <h2 className="section-title mb-35">Available dates</h2>
                <p className="">
                  Check the availability of your desired dates and send us a
                  message or proceed directly to our booking site.
                </p>
                <div className={`header-btn mt-25 w-100 text-center`}>
                  <a
                    className="theme-btn theme-btn-small"
                    target="_blank"
                    href={process.env.NEXT_PUBLIC_RENTLIO_URL}
                  >
                    Book here
                  </a>
                </div>
                <div className="mt-25 w-100 external-booking-container">
                  <Button
                    href={process.env.NEXT_PUBLIC_AIRBNB_URL}
                    className={`bg-transparent border-0 external-booking-container__booking-image`}
                  >
                    <Image src="/assets/img/airbnb.png" alt="airbnb" />
                  </Button>
                  <Button
                    href={process.env.NEXT_PUBLIC_BOOKING_URL}
                    className={`bg-transparent border-0 external-booking-container__booking-image`}
                  >
                    <Image src="/assets/img/booking.png" alt="airbnb" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar col-lg-6">
            <Calendar
              showDoubleView={!isMobile}
              showFixedNumberOfWeeks={false}
              showNeighboringMonth={false}
              onChange={onChange}
              onActiveStartDateChange={onActiveStartDateChange}
              value={value}
              locale="en-EN"
              tileClassName={({ date, view }) => {
                if (!reservations) {
                  return;
                }

                let currentDate = new Date(date);

                // selects all dates before now
                if (new Date(currentDate) <= new Date()) {
                  return "past"; // this is css
                }

                const indexOfDate = reservations?.findIndex(
                  (reservation) =>
                    dayjs(reservation.date).format("DD-MM-YYYY") ===
                    dayjs(currentDate).format("DD-MM-YYYY")
                );

                if (indexOfDate !== -1) {
                  if (reservations[indexOfDate]?.availability !== 1) {
                    if (isStartDate(reservations, indexOfDate)) {
                      return "arrival";
                    }
                    return "reserved";
                  } else if (isEndDate(reservations, indexOfDate)) {
                    return "departure";
                  }
                }

                return "default";
              }}
            />
            <div className="rectangle-container">
              <div className="rectangle-container__subcontainer">
                <div className="rectangle-container__subcontainer__rectangle1" />
                <span>Reserved</span>
              </div>
              <div className="rectangle-container__subcontainer">
                <div className="rectangle-container__subcontainer__rectangle2" />
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarComponent;
