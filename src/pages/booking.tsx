import React, { useContext, useState } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import { LangContext, Lang } from "../context/LangContext";

function range(y: number, m: number, d1: number, d2: number) {
  const out: string[] = [];
  for (let d = d1; d <= d2; d++)
    out.push(
      `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    );
  return out;
}

const BOOKED = new Set([
  ...range(2026, 5, 15, 28),
  ...range(2026, 6, 5, 19),
  ...range(2026, 7, 1, 16),
  ...range(2026, 8, 2, 12),
]);

function fmt(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
function daysInMonth(y: number, m: number) {
  return new Date(y, m + 1, 0).getDate();
}
function firstDay(y: number, m: number) {
  return new Date(y, m, 1).getDay();
}

const MONTHS_EN = [
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
const MONTHS_HR = [
  "Siječanj",
  "Veljača",
  "Ožujak",
  "Travanj",
  "Svibanj",
  "Lipanj",
  "Srpanj",
  "Kolovoz",
  "Rujan",
  "Listopad",
  "Studeni",
  "Prosinac",
];
const DAYS_EN = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const DAYS_HR = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];

type MonthGridProps = {
  year: number;
  month: number;
  checkin: string;
  checkout: string;
  onDay: (key: string) => void;
  lang: Lang;
};

const MonthGrid = ({
  year,
  month,
  checkin,
  checkout,
  onDay,
  lang,
}: MonthGridProps) => {
  const days = daysInMonth(year, month);
  const start = firstDay(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const MONTHS = lang === "hr" ? MONTHS_HR : MONTHS_EN;
  const DAYS = lang === "hr" ? DAYS_HR : DAYS_EN;
  const cells: (number | null)[] = [];
  for (let i = 0; i < start; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);

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
          const book = BOOKED.has(key);
          const isCi = checkin === key;
          const isCo = checkout === key;
          const inRng = checkin && checkout && key > checkin && key < checkout;
          let bg: string = "transparent";
          let color: string = past || book ? "var(--fg-3)" : "var(--fg)";
          let cursor: string = "pointer";
          if (past || book) cursor = "default";
          if (isCi || isCo) {
            bg = "var(--accent)";
            color = "#fff";
          } else if (inRng) {
            bg = "oklch(88% 0.030 45)";
          }
          if (book) bg = "var(--bg-2)";
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
                borderRadius: "1px",
                fontWeight: isCi || isCo ? 500 : 300,
                transition: "background 0.15s",
                position: "relative",
              }}
              title={book ? "Booked" : ""}
            >
              {d}
              {book && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 3,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--accent-l)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BookingPage = () => {
  const { lang, t } = useContext(LangContext);
  const b = t.booking;
  const today = new Date();
  const [viewM, setViewM] = useState({
    y: today.getFullYear(),
    m: today.getMonth(),
  });
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);

  const nextM =
    viewM.m === 11 ? { y: viewM.y + 1, m: 0 } : { y: viewM.y, m: viewM.m + 1 };

  const onDay = (key: string) => {
    if (!checkin || (checkin && checkout)) {
      setCheckin(key);
      setCheckout("");
    } else if (key > checkin) {
      setCheckout(key);
    } else {
      setCheckin(key);
      setCheckout("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const f = b.f;

  return (
    <div className="vi">
      <Seo
        title="Booking"
        description="Check available dates and book your stay at Villa Istria directly through trusted booking channels."
        path="/booking"
        image="/assets/img/images/Villa_Istria-34.webp"
      />
      <Header />
      <div className="vi-page">
        <div
          style={{
            background: "var(--bg-dark)",
            color: "#fff",
            padding: "7rem 0 5rem",
            textAlign: "center",
          }}
        >
          <div className="vi-container">
            <span className="vi-overline vi-overline--light">{b.eyebrow}</span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "0.06em",
              }}
            >
              {b.title}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                marginTop: "1rem",
                fontSize: "0.9rem",
              }}
            >
              {b.calNote}
            </p>
          </div>
        </div>

        <section className="vi-section">
          <div className="vi-container">
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
                  lang={lang}
                />
                <MonthGrid
                  year={nextM.y}
                  month={nextM.m}
                  checkin={checkin}
                  checkout={checkout}
                  onDay={onDay}
                  lang={lang}
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
                  ■ <span style={{ color: "var(--accent)" }}>Selected</span>
                </span>
                <span>
                  ● <span>Booked</span>
                </span>
              </div>
            </div>

            <div
              style={{
                padding: "2.5rem",
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                marginBottom: "4rem",
              }}
            >
              <span
                className="vi-overline"
                style={{ display: "block", marginBottom: "0.6rem" }}
              >
                {b.bcEyebrow}
              </span>
              <h3 style={{ marginBottom: "0.6rem" }}>{b.bcTitle}</h3>
              <p
                style={{
                  color: "var(--fg-2)",
                  fontSize: "0.92rem",
                  maxWidth: "58ch",
                  marginBottom: "1.8rem",
                }}
              >
                {b.bcText}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  alignItems: "stretch",
                }}
              >
                <a
                  href="https://www.booking.com/hotel/hr/villa-istria-vabriga1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 220,
                    height: 80,
                    padding: "0 1.75rem",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    transition:
                      "transform 0.15s, box-shadow 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "var(--fg-3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <img
                    src="/assets/img/booking.png"
                    alt="Booking.com"
                    style={{ maxHeight: 28, width: "auto", display: "block" }}
                  />
                </a>
                {/* <a
                  href="https://airbnb.com/h/villa-istria"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 220,
                    height: 80,
                    padding: "0 1.75rem",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "var(--fg-3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <img
                    src="/assets/img/airbnb.png"
                    alt="Airbnb"
                    style={{ maxHeight: 36, width: "auto", display: "block" }}
                  />
                </a> */}
              </div>
            </div>

            <div
              style={{
                maxWidth: 600,
                borderTop: "1px solid var(--border)",
                paddingTop: "3rem",
              }}
            >
              <h3 style={{ marginBottom: "2rem" }}>{b.formTitle}</h3>
              {sent ? (
                <div
                  style={{
                    padding: "2rem",
                    background: "var(--bg-2)",
                    border: "1px solid var(--border)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--accent)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    ✓
                  </div>
                  <p>{f.success}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <input
                    placeholder={f.name}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <input
                      type="email"
                      placeholder={f.email}
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    <input
                      placeholder={f.phone}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <input
                      placeholder={f.checkin}
                      value={checkin}
                      onChange={(e) => setCheckin(e.target.value)}
                    />
                    <input
                      placeholder={f.checkout}
                      value={checkout}
                      onChange={(e) => setCheckout(e.target.value)}
                    />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {f.guests || "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    placeholder={f.msg}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="vi-btn vi-btn--primary"
                    style={{ alignSelf: "flex-start" }}
                  >
                    {f.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
