"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-5 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/finvin-logo.png"
            alt="Finvin Logo"
            width={88}
            height={88}
          />
        </Link>
        <div className="flex gap-6 text-blue-900 font-medium text-base">
          <Link
            href="/"
            className={`transition relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 ${
              pathname === "/" || pathname === null
                ? "text-blue-600 after:scale-x-100"
                : "hover:text-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/what-we-do"
            className={`transition relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 ${
              pathname.startsWith("/what-we-do")
                ? "text-blue-600 after:scale-x-100"
                : "hover:text-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            }`}
          >
            What We Do
          </Link>
          <Link
            href="/who-we-are"
            className={`transition relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 ${
              pathname.startsWith("/who-we-are")
                ? "text-blue-600 after:scale-x-100"
                : "hover:text-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            }`}
          >
            Who We Are
          </Link>
          <Link
            href="/resource-center"
            className={`transition relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 ${
              pathname.startsWith("/resource-center")
                ? "text-blue-600 after:scale-x-100"
                : "hover:text-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            }`}
          >
            Resource Center
          </Link>
          <Link
            href="/contact-us"
            className={`transition relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 ${
              pathname.startsWith("/contact-us")
                ? "text-blue-600 after:scale-x-100"
                : "hover:text-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
