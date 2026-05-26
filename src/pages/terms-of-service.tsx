import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import PolicyContent from "../components/Legal/PolicyContent";
import Seo from "../components/Common/Seo";

const TermsOfServicePage = () => {
  return (
    <div className="vi">
      <Seo
        title="Terms of Service"
        description="Review the general terms and conditions for staying at Villa Istria Vabriga."
        path="/terms-of-service"
      />
      <Header />
      <PolicyContent type="terms" />
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
