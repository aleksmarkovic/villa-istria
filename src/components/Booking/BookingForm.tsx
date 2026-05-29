import React, { useContext, useState } from "react";
import { LangContext } from "../../context/LangContext";
import { sendEmail } from "../../utils/sendEmail";

interface BookingFormProps {
  checkin: string;
  checkout: string;
  onCheckinChange: (val: string) => void;
  onCheckoutChange: (val: string) => void;
}

const BookingForm = ({
  checkin,
  checkout,
  onCheckinChange,
  onCheckoutChange,
}: BookingFormProps) => {
  const { t } = useContext(LangContext);
  const b = t.booking;
  const f = b.f;

  const [guests, setGuests] = useState("2");
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await sendEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: `Booking inquiry — ${checkin || "?"} → ${checkout || "?"} (${guests} guests)`,
        message: form.msg,
      });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
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
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder={f.phone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
              onChange={(e) => onCheckinChange(e.target.value)}
            />
            <input
              placeholder={f.checkout}
              value={checkout}
              onChange={(e) => onCheckoutChange(e.target.value)}
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
            style={{ alignSelf: "flex-start", opacity: submitting ? 0.6 : 1 }}
            disabled={submitting}
          >
            {submitting ? "…" : f.submit}
          </button>
          {error && (
            <p style={{ color: "#b00020", fontSize: "0.88rem", margin: 0 }}>
              {f.error}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default BookingForm;
