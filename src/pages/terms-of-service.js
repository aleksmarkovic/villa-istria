import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import TermsOfService from "../components/Legal/TermsOfService";
import Seo from "../components/Common/Seo";

const TermsOfServicePage = () => {
  return (
    <React.Fragment>
      <Seo
        title="Terms of Service"
        description="Review the general terms and conditions for staying at Villa Istria Vabriga."
        path="/terms-of-service"
      />
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
