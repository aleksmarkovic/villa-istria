import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import PolicyContent from "../components/Legal/PolicyContent";
import Seo from "../components/Common/Seo";

const PrivacyPolicyPage = () => {
  return (
    <div className="vi">
      <Seo page="privacy" />
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
