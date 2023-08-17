import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import PrivacyPolicy from "../components/Legal/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <React.Fragment>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicyPage;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
