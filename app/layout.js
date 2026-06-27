import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Base URL used to build absolute URLs for the social share image.
// Override in production by setting NEXT_PUBLIC_SITE_URL (e.g. https://finvin.co.in).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Finvin Turnaround & Restructuring Pvt. Ltd.",
  description:
    "Finvin is an Insolvency Professional Entity recognized by IBBI, providing support services to affiliated Insolvency Professionals.",
  openGraph: {
    title: "Finvin Turnaround & Restructuring Pvt. Ltd.",
    description:
      "Finvin is an Insolvency Professional Entity recognized by IBBI, providing support services to affiliated Insolvency Professionals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finvin Turnaround & Restructuring Pvt. Ltd.",
    description:
      "Finvin is an Insolvency Professional Entity recognized by IBBI, providing support services to affiliated Insolvency Professionals.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
