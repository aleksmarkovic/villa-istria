import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ProjectMain from "../components/Project/ProjectMain";

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ProjectMain />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProjectPage;

export async function getStaticProps({ store }) {
  return {
    props: {},
  };
}
