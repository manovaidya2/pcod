import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f3edfb] px-3 py-7 sm:py-8 text-center">
      <div className="mx-auto max-w-[640px]">

        {/* Heading */}
        <h2 className="font-serif italic text-[#171524] text-[20px] sm:text-[26px] lg:text-[30px] leading-snug font-normal">
          “Before Trying Another Treatment...”
        </h2>

        {/* Subheading */}
        <p className="mt-2.5 font-serif text-[#7b4ba4] text-[14px] sm:text-[17px] lg:text-[18px] leading-snug">
          Understand What Your Body May Actually Be Asking For.
        </p>

        {/* Brand */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5d46a3] text-white font-serif text-[13px]">
            M
          </span>

          <span className="font-serif text-[#171524] text-[15px] sm:text-[17px]">
            Manovaidya
          </span>
        </div>

        {/* Copyright */}
        <p className="mt-3 text-[#565d76] text-[12px] sm:text-[14px]">
          © 2026 Manovaidya · Premium Women Wellness Consultation
        </p>
      </div>
    </footer>
  );
}