import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
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
