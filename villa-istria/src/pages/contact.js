import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ContactSection from "../components/Contact/ContactSection";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ContactSection padding={150} />
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
