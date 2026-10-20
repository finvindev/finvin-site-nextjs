import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { site } from "@/content/site";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | NPA Resolution, IBC Advisory & Distressed Asset Recovery`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "NPA resolution",
    "distressed asset recovery",
    "IBC advisory",
    "insolvency professional entity",
    "SARFAESI",
    "debt restructuring",
    "ARC advisory",
    "bank auction properties",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: "/images/homepage-hero.jpg",
        width: 1366,
        height: 769,
        alt: "Finvin — helping India revive distressed assets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/homepage-hero.jpg"],
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/finvin-logo.png`,
  description: site.description,
  email: "info@finvin.co.in",
  telephone: "+91-86533-53970",
  address: {
    "@type": "PostalAddress",
    streetAddress: "602, Sunteck Crest, Andheri East",
    addressLocality: "Mumbai",
    postalCode: "400059",
    addressCountry: "IN",
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body
        className={`${libreBaskerville.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
