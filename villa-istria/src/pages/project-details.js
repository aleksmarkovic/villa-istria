import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetailsMain";

class ProjectDetailsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ProjectDetails />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProjectDetailsPage;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
