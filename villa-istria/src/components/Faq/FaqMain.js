import React, { Component } from 'react';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqFormSection';


class FaqMain extends Component {

    render() {

        return (
            <main>
                {/* faq-start */}
                <FaqAccordion />
				{/* faq-end */}

                {/* form-start */}
                <FaqForm />
				{/* form-end */}

                {/* pricing-start */}
                <CtaTwo />
                {/* pricing-end */}
        	</main>
        );
    }
}

export default FaqMain;