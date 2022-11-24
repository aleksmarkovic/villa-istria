import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import CalendarComponent from "../components/Booking/Calendar";

const Booking = () => {
  return (
    <>
      <Header />
      <CalendarComponent />
      <Footer />
    </>
  );
};

export default Booking;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
