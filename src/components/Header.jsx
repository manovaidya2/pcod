import React from "react";
import logo from "../images/manovaidya-logo (1).png";

export default function Header() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-[9999] w-full bg-[#f5f3f7]/95 backdrop-blur-md border-b border-[#e6e1ea]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 h-[68px] flex items-center justify-between">

          {/* ONLY LOGO */}
          <a
            href="/"
            className="group relative flex items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0  blur-lg scale-125 group-hover:scale-150 transition duration-500" />

            {/* Logo Box */}
  {/* Logo Box */}
{/* Logo Box */}
<div className="relative h-[72px] w-[180px] flex items-center justify-start overflow-hidden">
  <img
    src={logo}
    alt="Manovaidya"
    className="h-[64px] w-[170px] object-contain"
  />
</div>
          </a>

          {/* CTA BUTTON */}
          <a
            href="https://rzp.io/rzp/ydaKYJsq"
            className="inline-flex items-center justify-center bg-[#5f46b2] hover:bg-[#533ba5] text-white px-5 sm:px-7 h-[40px] rounded-full text-[14px] sm:text-[15px] font-semibold transition-all duration-300 shadow-[0_8px_24px_rgba(95,70,178,0.25)]"
          >
            Book ₹499 Assessment
          </a>
        </div>
      </header>

      {/* MOBILE STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-[#e7e1d6] p-3 sm:hidden">
        <a
          href="https://rzp.io/rzp/ydaKYJsq"
          className="flex items-center justify-center w-full rounded-full bg-[#5f46b2] text-white py-4 px-5 text-[15px] font-bold shadow-lg"
        >
          Book ₹499 Assessment
        </a>
      </div>
    </>
  );
}