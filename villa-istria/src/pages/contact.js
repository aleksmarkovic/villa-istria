import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ContactMain from "../components/Contact/ContactMain";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ContactMain />
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
