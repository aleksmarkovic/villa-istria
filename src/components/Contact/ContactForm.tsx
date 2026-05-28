import React, { useContext, useState } from "react";
import { LangContext } from "../../context/LangContext";
import { sendEmail } from "../../utils/sendEmail";

const ContactForm = () => {
  const { t } = useContext(LangContext);
  const f = t.contact.f;
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
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
        subject: "Contact form — Villa Istria",
        message: form.msg,
      });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div
        style={{
          padding: "3rem 2rem",
          background: "var(--bg-2)",
          border: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            color: "var(--accent)",
            marginBottom: "0.75rem",
          }}
        >
          ✓
        </div>
        <p>{f.success}</p>
      </div>
    );
  }

  return (
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
      <input
        type="email"
        placeholder={f.email}
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder={f.msg}
        required
        value={form.msg}
        onChange={(e) => setForm({ ...form, msg: e.target.value })}
        style={{ minHeight: 180 }}
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
  );
};

export default ContactForm;
