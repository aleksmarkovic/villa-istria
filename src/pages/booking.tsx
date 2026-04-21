import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ContactSection from "../components/Contact/ContactSection";
import CalendarComponent from "../components/Booking/Calendar";
import Seo from "../components/Common/Seo";

class ContactPage extends React.Component {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Seo
          title="Booking"
          description="Check available dates and book your stay at Villa Istria directly through trusted booking channels."
          path="/booking"
          image="/assets/img/images/Villa_Istria-34.webp"
        />
        <Header />
        <CalendarComponent />
        <ContactSection padding={50} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
