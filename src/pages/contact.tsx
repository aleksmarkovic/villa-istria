import React, { useContext } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import PageHero from "../components/Common/PageHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import { LangContext } from "../context/LangContext";

const ContactPage = () => {
  const { t } = useContext(LangContext);
  const c = t.contact;

  return (
    <div className="vi">
      <Seo page="contact" image="/assets/img/images/cropped/Villa_Istria-front.webp" />
      <Header />
      <div className="vi-page">
        <PageHero eyebrow={c.eyebrow} title={c.title} />

        <section className="vi-section">
          <div className="vi-container">
            <div
              className="vi-contact-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "start",
              }}
            >
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="vi-section" style={{ paddingTop: 0 }}>
          <div className="vi-container">
            <div
              style={{
                width: "100%",
                height: 480,
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
        </section>
      </div>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.vi-contact-row) {
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
