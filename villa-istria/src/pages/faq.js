import React from "react";
import Header from "../components/Layout/Header/Header";
import FaqMain from "../components/Faq/FaqMain";

class FaqPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <FaqMain />
      </React.Fragment>
    );
  }
}

export default FaqPage;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
