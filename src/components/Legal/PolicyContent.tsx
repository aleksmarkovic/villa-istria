import React from "react";

type Section = { heading: string; body: string };
type Doc = { title: string; intro?: string; sections: Section[] };

const TERMS: Doc = {
  title: "General Terms and Conditions",
  sections: [
    {
      heading: "Article 1.",
      body:
        'Subject of this contract is the regulation of legal relations during the accommodation reservation process amongst the provider of private accommodation in the facility "VILLA ISTRIA VABRIGA", tel. +385919304368, e-mail info@villa-istria.hr (below: VILLA ISTRIA VABRIGA) and accommodation user (below: GUEST). Paying in advance for the reservation in the required period, GUEST unconditionally accepts these General terms and conditions. VILLA ISTRIA VABRIGA retains the right to change these General terms and conditions. General terms and conditions will be published on web page www.villa-istria.hr, which take effect on the date of publication.',
    },
    {
      heading: "Article 2.",
      body:
        "Contract amongst GUEST and VILLA ISTRIA VABRIGA takes effect with biding the reservation (orally, in writing or via e-mail). From that moment forward, rights and obligations of both Contractual parties (VILLA ISTRIA VABRIGA and GUEST) are directed with these General terms and conditions. Confirmation of the booking will be sent to GUEST via e-mail.",
    },
    {
      heading: "Article 3.",
      body:
        'All prices are denominated in EUR per facility and per night. After biding the reservation, it is necessary to pay in advance 20% of the contracted final price for the accommodation. When the owner of the private accommodation "VILLA ISTRIA VABRIGA" sends the confirmation of the booking, the contract is concluded with the acceptance of these General terms and conditions, which form an integral part of Rental Contract for the facility "VILLA ISTRIA VABRIGA". When the reservation process is finished, VILLA ISTRIA VABRIGA will send a written confirmation of the booking via e-mail with all the needed information concerning the rent and payment. It is considered that the Rental Contract is concluded in the moment when VILLA ISTRIA VABRIGA receives the advancement payment. In case the payment is not made within 5 (five) days of the reservation, the Rental Contract is considered terminated and VILLA ISTRIA VABRIGA is authorized to conclude the contract with some other GUEST without prior notice. If it is not stated otherwise, water, electricity and Internet costs, as well as bed sheets, towels, kitchen towels, final cleaning of the interior, pool and exterior maintenance are included in the price.\n\nUpon receipt confirmation of the booking, GUEST must make an advance payment of 20% within 5 (five) days. The remaining amount must be paid 60 days prior arrival. For reservations made within 60 days prior arrival, full payment must be made within the next 48 hours.',
    },
    {
      heading: "Article 4.",
      body:
        "In case of cancellation of the reservation, the following provisions are applicable:\n\n• At least 60 days before arrival — advance payment returned in full.\n• Between 59 and 30 days before arrival — GUEST charged 50% of the full reservation amount.\n• 29 days before arrival or no show — GUEST charged 100% of the full reservation amount.\n\nThese conditions have been applied since June 1st, 2022.",
    },
    {
      heading: "Article 5.",
      body:
        "At any time, the number of persons accommodated cannot be greater than the number mentioned in the confirmation. That number includes children of any age. If more guests stay than allowed without prior knowledge of owner, VILLA ISTRIA VABRIGA has the right to terminate the Rental Contract immediately, without notice. In that case GUESTS must leave within 2 (two) hours and have no right to demand a refund.",
    },
    {
      heading: "Article 6.",
      body:
        "VILLA ISTRIA VABRIGA has its own house rules placed on a visible place. GUESTS are obliged to follow the house rules. Non-compliance is considered a serious violation of the Contract, in which case the owner has the right to terminate the Rental Contract immediately, and the GUEST must leave permanently within 2 (two) hours without right to a refund.",
    },
    {
      heading: "Article 7.",
      body:
        "Despite thorough cleaning and maintenance, occasional appearance of insects or other living creatures from their natural habitat may happen. VILLA ISTRIA VABRIGA cannot be held responsible for such cases, including allergic reactions.",
    },
    {
      heading: "Article 8.",
      body:
        "GUESTS are obliged to follow all instructions related to the use of the swimming pool given by the owner. Children should not be present in the swimming pool without adult supervision. The GUEST uses the swimming pool at their own responsibility. If accommodation is booked outside of the summer season, the pool might be out of use.",
    },
    {
      heading: "Article 9.",
      body:
        "Upon arrival, GUESTS must hand over their passport or identity card for registration with the tourist community through the eVisitor system. Arrival time: 16:00–20:00. Departure: by 10:00 a.m. In case of late arrival, the GUEST must inform the owner in advance. In case of premature departure, the GUEST is obliged to pay the amount shown on the binding reservation.",
    },
    {
      heading: "Article 10.",
      body:
        "During their stay, the GUEST is obliged to use the facility and its equipment with appropriate care. The GUEST must not disturb other guests or neighbors. All damages must be reported immediately. The GUEST is responsible for damages they cause. Claims for compensation must be submitted in writing within two weeks after the stay, with proof. VILLA ISTRIA VABRIGA is obliged to submit a written decision within 15 (fifteen) days of receipt.",
    },
    {
      heading: "Article 11.",
      body:
        "The liability of the owner is limited to the price of the selected accommodation unit and does not include personal, material or financial damages. VILLA ISTRIA VABRIGA is not responsible for losses attributable to: actions or omissions by the GUEST; failures of third parties; force majeure; use of swimming pool; damages due to burglary.",
    },
    {
      heading: "Article 12.",
      body:
        "The parties are bound to resolve all disputes consensually. If not possible, jurisdiction is Općinski sud u Pazinu, Stalna služba u Poreču-Parenzo, under the law of the Republic of Croatia.",
    },
  ],
};

const PRIVACY: Doc = {
  title: "Privacy Policy",
  intro:
    "At Villa Istria Vabriga, we are committed to protecting the privacy of our users and their personal information. This Privacy Policy describes how we collect, use, and share information through our website, www.villa-istria.hr. By accessing or using our website, you agree to this Privacy Policy.",
  sections: [
    {
      heading: "1. Information We Collect",
      body:
        "We may collect: personal information such as your name, email address, phone number, and billing information; information related to your booking, such as the dates of your stay, number of guests, and type of accommodation.",
    },
    {
      heading: "2. Use of Information",
      body:
        "We may use the information we collect to: process and manage your bookings; communicate with you regarding your booking and services; improve our website and services; comply with legal obligations.",
    },
    {
      heading: "3. Sharing of Information",
      body:
        "We may share your information with: Rentlio, the provider of the booking engine, for processing your booking; third-party service providers who assist with website maintenance and marketing; law enforcement agencies in response to a legal request.",
    },
    {
      heading: "4. Cookies",
      body:
        "We use cookies on our website to improve your browsing experience and personalize content. Cookies are small text files stored on your device. You can disable cookies through your browser settings.",
    },
    {
      heading: "5. Security",
      body:
        "We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure.",
    },
    {
      heading: "6. Children's Privacy",
      body:
        "Our website is not intended for use by children under the age of 18. We do not knowingly collect personal information from children.",
    },
    {
      heading: "7. Changes to this Privacy Policy",
      body:
        "We reserve the right to update or modify this Privacy Policy at any time. The most current version will be posted on our website. Questions? Contact us at info@villa-istria.hr.",
    },
  ],
};

interface PolicyContentProps {
  type: "terms" | "privacy";
}

const PolicyContent = ({ type }: PolicyContentProps) => {
  const doc = type === "terms" ? TERMS : PRIVACY;

  return (
    <div className="vi-page">
      <div style={{ background: "var(--bg-dark)", color: "#fff", padding: "7rem 0 5rem", textAlign: "center" }}>
        <div className="vi-container">
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.06em" }}>{doc.title}</h1>
          {doc.intro && (
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                maxWidth: 600,
                margin: "1.5rem auto 0",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              {doc.intro}
            </p>
          )}
        </div>
      </div>

      <section className="vi-section">
        <div className="vi-container" style={{ maxWidth: 760 }}>
          {doc.sections.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: "2.5rem",
                paddingBottom: "2.5rem",
                borderBottom: i < doc.sections.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  marginBottom: "0.8rem",
                  color: "var(--accent)",
                }}
              >
                {s.heading}
              </h4>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ marginBottom: "0.8rem", fontSize: "0.9rem", lineHeight: 1.8 }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PolicyContent;
