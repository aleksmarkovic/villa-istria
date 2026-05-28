import React, { useContext, useState } from "react";
import { LangContext } from "../../context/LangContext";
import MonthGrid from "./MonthGrid";

interface BookingCalendarProps {
  checkin: string;
  checkout: string;
  onCheckinChange: (val: string) => void;
  onCheckoutChange: (val: string) => void;
}

const BookingCalendar = ({
  checkin,
  checkout,
  onCheckinChange,
  onCheckoutChange,
}: BookingCalendarProps) => {
  const { t } = useContext(LangContext);
  const today = new Date();
  const [viewM, setViewM] = useState({
    y: today.getFullYear(),
    m: today.getMonth(),
  });

  const nextM =
    viewM.m === 11 ? { y: viewM.y + 1, m: 0 } : { y: viewM.y, m: viewM.m + 1 };

  const onDay = (key: string) => {
    if (!checkin || (checkin && checkout)) {
      onCheckinChange(key);
      onCheckoutChange("");
    } else if (key > checkin) {
      onCheckoutChange(key);
    } else {
      onCheckinChange(key);
      onCheckoutChange("");
    }
  };

  return (
    <div style={{ marginBottom: "4rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <button
          onClick={() => {
            if (viewM.m === 0) setViewM({ y: viewM.y - 1, m: 11 });
            else setViewM({ y: viewM.y, m: viewM.m - 1 });
          }}
          aria-label="Previous month"
          style={{
            fontSize: "1.2rem",
            color: "var(--fg-2)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 1rem",
          }}
        >
          ←
        </button>
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            color: "var(--fg-3)",
            textTransform: "uppercase",
          }}
        >
          {checkin && checkout
            ? `${checkin}  →  ${checkout}`
            : checkin
              ? checkin
              : "—"}
        </div>
        <button
          onClick={() => {
            if (viewM.m === 11) setViewM({ y: viewM.y + 1, m: 0 });
            else setViewM({ y: viewM.y, m: viewM.m + 1 });
          }}
          aria-label="Next month"
          style={{
            fontSize: "1.2rem",
            color: "var(--fg-2)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 1rem",
          }}
        >
          →
        </button>
      </div>
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
        <MonthGrid
          year={viewM.y}
          month={viewM.m}
          checkin={checkin}
          checkout={checkout}
          onDay={onDay}
        />
        <MonthGrid
          year={nextM.y}
          month={nextM.m}
          checkin={checkin}
          checkout={checkout}
          onDay={onDay}
        />
      </div>
      <div
        style={{
          marginTop: "1.2rem",
          display: "flex",
          gap: "2rem",
          fontSize: "0.72rem",
          color: "var(--fg-3)",
        }}
      >
        <span>
          ■ <span style={{ color: "var(--accent)" }}>{t.booking.legendSelected}</span>
        </span>
        <span>
          ● <span>{t.booking.legendBooked}</span>
        </span>
      </div>
    </div>
  );
};

export default BookingCalendar;
