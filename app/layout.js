import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

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

export const metadata = {
  title: "Finvin Turnaround & Restructuring Pvt. Ltd.",
  description:
    "Trusted by banks and ARCs for NPA revival, insolvency management and distressed asset recovery.",
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
