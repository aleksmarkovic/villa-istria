import React from "react";
import HomeTwoMain from "../components/HomeTwo/HomeTwoMain";
import HeaderTwo from "../components/Layout/Header/HeaderTwo";
import FooterTwo from "../components/Layout/Footer/FooterTwo";

class HomeTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo />
        <HomeTwoMain />
        <FooterTwo />
      </React.Fragment>
    );
  }
}

export default HomeTwo;

export async function getStaticProps({ store }) {
  return {
    props: {},
  };
}
