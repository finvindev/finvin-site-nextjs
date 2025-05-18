import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a2233] text-gray-100 pt-10 pb-6 px-4 mt-auto border-t border-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/finvin-logo.png"
              alt="Finvin Logo"
              width={48}
              height={48}
            />
          </div>
          <p className="text-sm leading-relaxed mb-2">
            Finvin Turnaround and Restructuring Private limited is an Insolvency
            Professional Entity recognized by Insolvency and Bankruptcy Board of
            India (IBBI) vide certificate recognition no. IBBI/IPE/0159 engaged
            in providing support services to it's affiliated Insolvency
            Professionals.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-sm items-center md:items-start">
          <span className="font-semibold mb-1">Finvin Group</span>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Finvin Investor Private Limited</li>
            <li>Finvin Advisor Private Limited</li>
            <li>Finvin Turnaround and Restructuring Private Limited</li>
            <li>Finvin Estatedeal Technologies Private Limited</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4 text-sm">
          <div>
            <span className="font-semibold">We are at</span>
            <div className="mt-1">
              602, Sunteck Crest, Andheri East, Mumbai - 400059.
            </div>
          </div>
          <div>
            <span className="font-semibold">Contact Us at</span>
            <div className="mt-1">
              +91 86553 53970 &nbsp;|&nbsp;{" "}
              <a
                href="mailto:Info@finvin.co.in"
                className="underline hover:text-blue-300"
              >
                Info@finvin.co.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 text-center mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Finvin Turnaround &amp; Restructuring
        Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
