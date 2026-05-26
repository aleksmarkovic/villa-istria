import React, { useContext, useState } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import { LangContext } from "../context/LangContext";

const ContactPage = () => {
  const { t } = useContext(LangContext);
  const c = t.contact;
  const f = c.f;
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="vi">
      <Seo
        title="Contact"
        description="Contact Villa Istria for booking questions, availability, and stay details in Vabriga, Croatia."
        path="/contact"
        image="/assets/img/images/cropped/Villa_Istria-front.webp"
      />
      <Header />
      <div className="vi-page">
        <div style={{ background: "var(--bg-dark)", color: "#fff", padding: "7rem 0 5rem", textAlign: "center" }}>
          <div className="vi-container">
            <span className="vi-overline vi-overline--light">{c.eyebrow}</span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.06em" }}>{c.title}</h1>
          </div>
        </div>

        <section className="vi-section">
          <div className="vi-container">
            <div
              className="vi-contact-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
            >
              <div>
                <span className="vi-overline">{c.eyebrow}</span>
                <h2 style={{ marginBottom: "2rem" }}>{c.title}</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--fg-3)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Address
                    </div>
                    <p style={{ whiteSpace: "pre-line", fontSize: "0.92rem" }}>{c.addr}</p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--fg-3)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email
                    </div>
                    <a href={`mailto:${c.email}`} style={{ color: "var(--accent)", fontSize: "0.92rem" }}>
                      {c.email}
                    </a>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--fg-3)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Phone
                    </div>
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} style={{ fontSize: "0.92rem" }}>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.4025610397325!2d13.611911963085207!3d45.293381990782315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477c9982c1e7761f%3A0x9f82c9aa839c03d2!2sVilla%20Istria!5e1!3m2!1shr!2shr!4v1653915252118!5m2!1shr!2shr"
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                </div>
              </div>

              <div>
                {sent ? (
                  <div
                    style={{
                      padding: "3rem 2rem",
                      background: "var(--bg-2)",
                      border: "1px solid var(--border)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "2rem", color: "var(--accent)", marginBottom: "0.75rem" }}>✓</div>
                    <p>{f.success}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
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
                    <button type="submit" className="vi-btn vi-btn--primary" style={{ alignSelf: "flex-start" }}>
                      {f.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          .vi-contact-row {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
