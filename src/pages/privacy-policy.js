import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import PrivacyPolicy from "../components/Legal/PrivacyPolicy";
import Seo from "../components/Common/Seo";

const PrivacyPolicyPage = () => {
  return (
    <React.Fragment>
      <Seo
        title="Privacy Policy"
        description="Read the Privacy Policy for Villa Istria Vabriga and learn how booking and website data are handled."
        path="/privacy-policy"
      />
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
