import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const BookingChannels = () => {
  const { t } = useContext(LangContext);
  const b = t.booking;

  return (
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
            src="/assets/img/booking.png"
            alt="Booking.com"
            style={{ maxHeight: 28, width: "auto", display: "block" }}
          />
        </a>
      </div>
    </div>
  );
};

export default BookingChannels;
