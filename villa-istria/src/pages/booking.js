import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ContactSection from "../components/Contact/ContactSection";
import CalendarComponent from "../components/Booking/Calendar";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <CalendarComponent />
        <ContactSection padding={50} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactPage;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
