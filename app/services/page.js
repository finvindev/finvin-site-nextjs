import ServiceBlock from "../../components/services/ServiceBlock";
import OurJourney from "../../components/services/OurJourney";

export const metadata = {
  title: "Services | Finvin Turnaround & Restructuring Pvt. Ltd.",
  description:
    "Advisory Services, Portfolio Sale, Insolvency Professional Entity, EstateDeal.in and Retail NPA Pool Services from Finvin.",
};

const SERVICES = [
  {
    title: "Advisory Services",
    imageSide: "right",
    imageLabel: "Advisory services — stressed asset resolution",
    intro:
      "We work closely with promoters on debt settlement, restructuring and funding solutions, while helping investors identify, evaluate and acquire stressed assets under the IBC and SARFAESI frameworks.",
    lists: [
      {
        heading: "We manage the following functions under this group:",
        items: [
          "NPA Portfolio Sale",
          "Debt Restructuring",
          "One-Time Settlement (OTS)",
          "IBC Advisory",
          "Resolution Plan Preparation",
          "Financial & Legal Due Diligence",
          "Asset Due Diligence",
          "Resolution Plan Presentation",
          "Fundraising & Financing Support",
          "Negotiation with the Committee of Creditors (CoC)",
          "MSME Resolution Plans",
        ],
      },
    ],
  },
  {
    title: "Portfolio Sell",
    imageSide: "left",
    imageLabel: "Portfolio sale — distressed asset transactions",
    intro:
      "FINVIN provides specialised advisory services to banks, NBFCs and other stakeholders, helping them navigate distressed assets, debt resolution and complex transactions to maximise value and achieve effective outcomes.",
    lists: [
      {
        heading: "We manage the following functions under this group:",
        items: [
          "Identification of ARCs & Investors – Identifying suitable buyers and investors offering the best value.",
          "NPA Portfolio Identification – Identifying NPA loans with a strong underlying asset base.",
          "Legal & Title Due Diligence – Assessing legal documentation, title and key risks associated with the underlying assets.",
          "DRT & NCLT Matters – Understanding the legal and recovery position of NPA accounts and ongoing proceedings.",
          "Investor Engagement – Connecting NPA portfolios with relevant ARCs, investors and distressed funds.",
          "Transaction Support – Supporting stakeholders through the portfolio sale process from evaluation to closure.",
        ],
      },
    ],
  },
  {
    title: "Insolvency Professional Entity",
    imageSide: "right",
    imageLabel: "Insolvency Professional Entity — IBC support",
    intro:
      "Our company provides comprehensive support to Insolvency Professionals (IPs) acting as Interim Resolution Professionals (IRPs), Resolution Professionals (RPs), or Liquidators. We understand the complexity of managing corporate insolvency and liquidation assignments and offer backend, legal, and field-level assistance to help IPs execute their duties effectively under IBC, 2016.",
    lists: [
      {
        heading: "We manage the following functions under this group:",
        items: [
          "Public Notices & Stakeholder Intimations",
          "Claims Verification & Creditors List",
          "CoC Meetings & Stakeholder Coordination",
          "Information Memorandum & RFRP",
          "Resolution Plan Evaluation & Implementation",
          "Regulatory Compliance",
        ],
      },
      {
        heading: "End-to-End Liquidation Management:",
        items: [
          "Public Notices & Stakeholder Intimations",
          "Stakeholder & Claims Management",
          "Asset Management & Custody",
          "Auction & Sale Process",
          "Liquidation Reports & Documentation",
          "Regulatory Compliance",
        ],
      },
    ],
  },
  {
    title: "Estatedeal.in",
    imageSide: "left",
    imageLabel: "Estatedeal.in — bank auction properties",
    intro:
      "Estatedeal.in is a technology platform designed to streamline the sale of non-performing assets. We offer a complete end-to-end solution for banks, managing every aspect of the property sales process.",
    lists: [
      {
        heading: "We manage the following functions under this group:",
        items: [
          "Identification of ARCs & Investors – Identifying suitable buyers and investors offering the best value.",
          "NPA Portfolio Identification – Identifying NPA loans with a strong underlying asset base.",
          "Legal & Title Due Diligence – Assessing legal documentation, title and key risks associated with the underlying assets.",
          "DRT & NCLT Matters – Understanding the legal and recovery position of NPA accounts and ongoing proceedings.",
          "Investor Engagement – Connecting NPA portfolios with relevant ARCs, investors and distressed funds.",
          "Transaction Support – Supporting stakeholders through the portfolio sale process from evaluation to closure.",
        ],
      },
    ],
  },
  {
    title: "Retail NPA Pool Services",
    imageSide: "right",
    imageLabel: "Retail NPA Pool — loan servicing & recovery",
    intro:
      "We offer comprehensive loan servicing and recovery solutions for Banks, NBFCs, and ARCs, spanning early-stage collections to legal recovery and stressed asset resolution. With a PAN-India operational network and technology-driven processes, we are strengthening the servicing infrastructure for retail lending across underserved markets.",
    lists: [
      {
        heading: "We manage the following functions under this group:",
        items: [
          "Legal Recovery — SARFAESI, NI Act & Arbitration",
          "On-Ground Field Servicing & Asset Repossession",
          "AI-Powered Tele-Calling & Collections",
          "Portfolio Due Diligence & Recoverability Assessment",
          "Data Intelligence & AI Recovery Prediction",
          "Skip Tracing & Borrower Verification",
          "Settlement & Restructuring Workflows",
          "Public Notices & Stakeholder Intimations",
          "Regulatory Compliance & Documentation",
          "Recovery Dashboards & MIS Reporting",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-[#dcefff] pt-32 sm:pt-40">
        {SERVICES.map((service) => (
          <ServiceBlock key={service.title} {...service} />
        ))}
      </div>
      <OurJourney backgroundImage="/images/services/our-journey-hero.png" />
    </>
  );
}
