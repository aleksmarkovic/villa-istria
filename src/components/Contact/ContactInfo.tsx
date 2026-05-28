import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.4025610397325!2d13.611911963085207!3d45.293381990782315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477c9982c1e7761f%3A0x9f82c9aa839c03d2!2sVilla%20Istria!5e1!3m2!1shr!2shr!4v1653915252118!5m2!1shr!2shr";

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

      <div
        style={{
          marginTop: "3rem",
          width: "100%",
          height: 260,
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <iframe
          title="contact-map"
          src={MAP_SRC}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
