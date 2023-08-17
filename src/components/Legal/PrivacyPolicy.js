import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container justify-content-center mt-150 mb-50 align-items-center">
      <div className="d-flex justify-content-center">
        <div className="col-xxl-8 col-xl-6 col-lg-6  text-center">
          <div className="section-title-wrapper mb-15 text-center">
            <h2>Privacy Policy of Villa Istria Vabriga</h2>{" "}
          </div>{" "}
          <p>
            At Villa Istria Vabriga, we are committed to protecting the privacy
            of our users and their personal information. This Privacy Policy
            describes how we collect, use, and share information through our
            website, www.villa-istria.hr, which includes a booking engine
            implementation from Rentlio. By accessing or using our website, you
            agree to this Privacy Policy.
          </p>
          <ul>
            <il className="text-start mt-20">
              <h6 className="mt-20">1. Information We Collect</h6>
              <p>
                We may collect the following information from you when you visit
                or use our website:
              </p>
              <div>
                <p>
                  • Personal information such as your name, email address, phone
                  number, and billing information.
                </p>
                <p>
                  • Information related to your booking, such as the dates of
                  your stay, the number of guests, and the type of
                  accommodation.
                </p>
              </div>
            </il>
            <il className="text-start">
              <h6 className="mt-20">2. Use of Information</h6>
              <p>
                We may use the information we collect from you for the following
                purposes:
              </p>
              <div>
                <p>• To process and manage your bookings.</p>
                <p>
                  • To communicate with you regarding your booking and other
                  services we offer.
                </p>
                <p>• To improve our website and services.</p>
                <p>• To comply with legal obligations.</p>
              </div>
            </il>
            <il className="text-start">
              <h6 className="mt-20">3. Sharing of Information</h6>
              <p>We may share your information with the following entities:</p>
              <ul>
                <p>
                  • Rentlio, the provider of the booking engine, for the purpose
                  of processing your booking.
                </p>
                <p>
                  • Third-party service providers who assist us with website
                  maintenance, marketing, and other services.
                </p>
                <p>
                  • Law enforcement agencies or other government authorities in
                  response to a legal request or investigation.
                </p>
              </ul>
            </il>
            <il className="text-start">
              <h6 className="mt-20">4. Cookies</h6>
              <p>
                We use cookies on our website to improve your browsing
                experience and personalize content. Cookies are small text files
                that are stored on your device. You can disable cookies through
                your browser settings.
              </p>
            </il>
            <il className="text-start">
              <h6 className="mt-20">5. Security</h6>
              <p>
                We take reasonable measures to protect the information we
                collect from you against unauthorized access, use, or
                disclosure.
              </p>
            </il>
            <il className="text-start">
              <h6 className="mt-20">6. Children's Privacy</h6>
              <p>
                Our website is not intended for use by children under the age of
                18. We do not knowingly collect personal information from
                children.
              </p>
            </il>
            <il className="text-start">
              <h6 className="mt-20">7. Changes to this Privacy Policy</h6>
              <p>
                We reserve the right to update or modify this Privacy Policy at
                any time. The most current version of the policy will be posted
                on our website.
              </p>
            </il>
          </ul>
          <p className="text-start mt-20">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at info@villa-istria.hr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
