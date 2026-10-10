import InvestmentBlock from "../../components/investments/InvestmentBlock";

export const metadata = {
  title: "Investments | Finvin Turnaround & Restructuring Pvt. Ltd.",
  description:
    "Structured investment opportunities across distressed debt, retail portfolios, wholesale debt and IBC & liquidation assets.",
};

const INVESTMENTS = [
  {
    heading: "Investing Where Value Can Be Unlocked",
    subtext: "Structured opportunities across distressed debt, portfolios & assets.",
    subheading: "Retail Portfolios",
    tagline: "Structured. Secure. Scalable.",
    description:
      "We invest in S.R., backed by a Secured Retail Portfolio. NCDs are backed by structured trades between NBFCs and ARCS",
    statValue: "₹45 Cr+",
    statCaption: "Gross Employment • FY25–26",
    image: "/images/investments/investment-1.png",
    imageAlt: "Retail portfolio — residential apartment complex",
  },
  {
    heading: "Wholesale Debt for Strategic Resolution",
    subtext:
      "Asset-backed wholesale debt with strong collateral structures and resolution-led opportunities.",
    subheading: "Wholesale Debt",
    tagline: "High-value debt. Strategic resolution.",
    description:
      "We invest in debt backed by wholesale assets, alongside ARCs, where we have sector-level expertise. We focus on opportunities with a clear, actionable resolution strategy.",
    statValue: "₹33 Cr+",
    statCaption: "Gross Employment • FY25–26",
    image: "/images/investments/investment-2.png",
    imageAlt: "Wholesale debt — industrial warehouse facility",
  },
  {
    heading: "From Distressed Assets to Lasting Value",
    subtext:
      "Acquiring companies and assets through IBC liquidation and SARFAESI processes.",
    subheading: "IBC & Liquidation",
    tagline: "High-value debt. Strategic resolution.",
    description:
      "Acquisition of the Company through a resolution plan. Acquisition of assets under Liquidation. Acquisition of property under SARFAESI auction",
    statValue: "2 Assets",
    statCaption: "Currently in Acquisition",
    image: "/images/investments/investment-3.png",
    imageAlt: "Distressed asset transformed into a modern commercial building",
  },
];

export default function InvestmentsPage() {
  return (
    <div
      className="pt-32 sm:pt-40"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #eaf5ff 55%, #dcefff 100%)",
      }}
    >
      {INVESTMENTS.map((investment) => (
        <InvestmentBlock key={investment.heading} {...investment} />
      ))}
    </div>
  );
}
