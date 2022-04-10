import React from "react";
import Breadcrumb from "../components/Common/Breadcrumb";

const ConstructionPage = () => {
  // static getStaticProps({store}) {}

  // constructor(props) {
  //     super(props);
  // }

  return (
    <React.Fragment>
      <Breadcrumb pageTitle="Construction in progress" />
    </React.Fragment>
  );
};

export default ConstructionPage;

export async function getStaticProps({ store }) {
  return {
    props: {},
  };
}
