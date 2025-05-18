import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Finvin Turnaround & Restructuring Pvt. Ltd.",
  description:
    "Finvin is an Insolvency Professional Entity recognized by IBBI, providing support services to affiliated Insolvency Professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased bg-white text-[#1a2233] min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      >
        <Header />
        {/* Spacer for fixed header */}
        <div className="h-[92px]" />
        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
