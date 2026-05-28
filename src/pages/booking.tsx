import React, { useContext, useState } from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Common/Seo";
import PageHero from "../components/Common/PageHero";
import BookingCalendar from "../components/Booking/BookingCalendar";
import BookingChannels from "../components/Booking/BookingChannels";
import BookingForm from "../components/Booking/BookingForm";
import { LangContext } from "../context/LangContext";

const BookingPage = () => {
  const { t } = useContext(LangContext);
  const b = t.booking;
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

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
        <PageHero eyebrow={b.eyebrow} title={b.title} note={b.calNote} />

        <section className="vi-section">
          <div className="vi-container">
            <BookingCalendar
              checkin={checkin}
              checkout={checkout}
              onCheckinChange={setCheckin}
              onCheckoutChange={setCheckout}
            />
            <BookingChannels />
            <BookingForm
              checkin={checkin}
              checkout={checkout}
              onCheckinChange={setCheckin}
              onCheckoutChange={setCheckout}
            />
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
