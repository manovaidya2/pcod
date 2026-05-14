import React from "react";

export default function BookAssessmentCTA() {
  return (
    <section className="w-full bg-[#eadcff] py-5 sm:py-7 px-3">
      <div className="mx-auto max-w-[720px] rounded-[28px] border border-[#d7c5ef] bg-[#fbfaff] px-4 sm:px-7 py-10 sm:py-12 text-center shadow-[0_14px_45px_rgba(122,75,164,0.14)]">

        {/* Badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ded6e9] bg-white/60 px-4 py-1.5 text-[10px] tracking-[4px] uppercase text-[#5d46a3]">
          <span className="text-[12px] leading-none">•</span>
          Final Step
        </div>

        {/* Heading */}
        <h2 className="mt-5 font-serif text-[#171524] text-[28px] sm:text-[42px] lg:text-[46px] leading-[1.06] font-normal tracking-[-0.8px] uppercase">
          Book Your{" "}
          <span className="text-[#7b4ba4]">₹499 Root-</span>
          <br />
          <span className="text-[#7b4ba4]">Cause</span>{" "}
          Assessment
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-[11px] sm:text-[12px] tracking-[5px] uppercase text-[#6d6878]">
          Limited Daily Consultation Slots
        </p>

        {/* Button */}
        <a
          href="#book"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-[#5944a4] px-7 sm:px-10 py-4 sm:py-5 text-white text-[15px] sm:text-[18px] font-semibold shadow-[0_12px_28px_rgba(89,68,164,0.22)] hover:bg-[#503c99] transition"
        >
          BOOK CONSULTATION NOW
          <span className="ml-2">→</span>
        </a>

        {/* Bottom Text */}
        <div className="mt-6 text-[#6d6878] text-[10px] sm:text-[12px] tracking-[3px] uppercase leading-7">
          <p>✓ Premium Private Consultation</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-6">
            <span>✓ Structured Root-Cause Discussion</span>
            <span>✓ Women Wellness Focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}