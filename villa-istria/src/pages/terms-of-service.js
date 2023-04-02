import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import TermsOfService from "../components/Legal/TermsOfService";

const TermsOfServicePage = () => {
  return (
    <React.Fragment>
      <Header />
      <TermsOfService />
      <Footer />
    </React.Fragment>
  );
};

export default TermsOfServicePage;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
