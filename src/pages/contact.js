import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ContactSection from "../components/Contact/ContactSection";
import Seo from "../components/Common/Seo";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Seo
          title="Contact"
          description="Contact Villa Istria for booking questions, availability, and stay details in Vabriga, Croatia."
          path="/contact"
          image="/assets/img/images/cropped/Villa_Istria-front.webp"
        />
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
