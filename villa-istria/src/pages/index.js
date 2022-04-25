import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";

const Index = (props) => {
  return (
    <React.Fragment>
      <Header />
      <HomeMain />
      <Footer />
    </React.Fragment>
  );
};

export default Index;

export async function getStaticProps({ store }) {
  return {
    props: {},
  };
}
