import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import PolicyContent from "../components/Legal/PolicyContent";
import Seo from "../components/Common/Seo";

const PrivacyPolicyPage = () => {
  return (
    <div className="vi">
      <Seo
        title="Privacy Policy"
        description="Read the Privacy Policy for Villa Istria Vabriga and learn how booking and website data are handled."
        path="/privacy-policy"
      />
      <Header />
      <PolicyContent type="privacy" />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
