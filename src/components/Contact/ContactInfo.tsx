import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const Label = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: "0.68rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: "0.5rem",
    }}
  >
    {children}
  </div>
);

const ContactInfo = () => {
  const { t } = useContext(LangContext);
  const c = t.contact;

  return (
    <div>
      <span className="vi-overline">{c.eyebrow}</span>
      <h2 style={{ marginBottom: "2rem" }}>{c.title}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <Label>Address</Label>
          <p style={{ whiteSpace: "pre-line", fontSize: "0.92rem" }}>{c.addr}</p>
        </div>
        <div>
          <Label>Email</Label>
          <a
            href={`mailto:${c.email}`}
            style={{ color: "var(--accent)", fontSize: "0.92rem" }}
          >
            {c.email}
          </a>
        </div>
        <div>
          <Label>Phone</Label>
          <a
            href={`tel:${c.phone.replace(/\s/g, "")}`}
            style={{ fontSize: "0.92rem" }}
          >
            {c.phone}
          </a>
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;
