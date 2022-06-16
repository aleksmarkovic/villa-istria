import React, { Component } from "react";
import ServiceDetails from "./ServiceDetails";

class ServiceDetailsMain extends Component {
  render() {
    return (
      <main>
        {/* service-start */}
        <ServiceDetails />
        {/* service-end */}
      </main>
    );
  }
}

export default ServiceDetailsMain;
