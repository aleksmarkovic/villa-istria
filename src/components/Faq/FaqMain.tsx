import React, { Component } from 'react';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqFormSection';

class FaqMain extends Component {
  render() {
    return (
      <main>
        <FaqAccordion />
        <FaqForm />
      </main>
    );
  }
}

export default FaqMain;
