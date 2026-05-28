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
      <Seo
        title="Contact"
        description="Contact Villa Istria for booking questions, availability, and stay details in Vabriga, Croatia."
        path="/contact"
        image="/assets/img/images/cropped/Villa_Istria-front.webp"
      />
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
