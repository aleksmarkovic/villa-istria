import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { fmt, daysInMonth, firstDay } from "../../common/constants/calendarData";

type MonthGridProps = {
  year: number;
  month: number;
  checkin: string;
  checkout: string;
  onDay: (key: string) => void;
  booked: Set<string>;
};

const MonthGrid = ({
  year,
  month,
  checkin,
  checkout,
  onDay,
  booked,
}: MonthGridProps) => {
  const { t } = useContext(LangContext);
  const monthDays = daysInMonth(year, month);
  const start = firstDay(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const MONTHS = t.calendar.months;
  const DAYS = t.calendar.days;
  const cells: (number | null)[] = [];
  for (let i = 0; i < start; i++) cells.push(null);
  for (let d = 1; d <= monthDays; d++) cells.push(d);

  return (
    <div style={{ flex: "1 1 280px" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--font-serif)",
          fontSize: "1.05rem",
          marginBottom: "1rem",
          letterSpacing: "0.04em",
        }}
      >
        {MONTHS[month]} {year}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "2px",
        }}
      >
        {DAYS.map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--fg-3)",
              padding: "0.4rem 0",
              textTransform: "uppercase",
            }}
          >
            {d}
          </div>
        ))}
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const key = fmt(year, month, d);
          const date = new Date(year, month, d);
          const past = date < today;
          const book = booked.has(key);
          const isCi = checkin === key;
          const isCo = checkout === key;
          const inRng = checkin && checkout && key > checkin && key < checkout;
          let bg: string = "transparent";
          let color: string = past || book ? "var(--fg-3)" : "var(--fg)";
          let cursor: string = "pointer";
          let textDecoration: string = "none";
          if (past || book) cursor = "default";
          if (isCi || isCo) {
            bg = "var(--accent)";
            color = "#fff";
          } else if (inRng) {
            bg = "var(--cal-range)";
          }
          if (book) {
            bg = "var(--cal-booked)";
            textDecoration = "line-through";
          }
          return (
            <div
              key={i}
              onClick={() => !past && !book && onDay(key)}
              style={{
                textAlign: "center",
                padding: "0.55rem 0",
                fontSize: "0.82rem",
                cursor,
                background: bg,
                color,
                borderRadius: "2px",
                fontWeight: isCi || isCo ? 500 : 300,
                textDecoration,
                transition: "background 0.15s",
                position: "relative",
              }}
              title={book ? t.booking.legendBooked : t.booking.legendAvailable}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthGrid;
