import React from "react";
import heroImg from "../images/hero-woman.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4ecff] min-h-[calc(100vh-68px)]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(126,74,183,0.20),transparent_35%),radial-gradient(circle_at_45%_70%,rgba(255,255,255,0.75),transparent_45%)]" />

      {/* MAIN CONTAINER */}
      <div className="relative max-w-[1650px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-8 grid lg:grid-cols-[1.35fr_0.9fr] gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-[980px]">

          {/* TOP BADGE */}
          <div className="inline-flex items-center rounded-full border border-[#d9cdea] bg-white/40 backdrop-blur-sm px-5 py-2.5 text-[11px] tracking-[5px] uppercase text-[#5d46a6] font-medium shadow-sm">
            <span className="mr-2 text-[14px] leading-none">•</span>
            Root-Cause Wellness · For Women
          </div>

          {/* TITLE */}
          <h1 className="mt-7 font-serif text-[#17111f] text-[52px] sm:text-[72px] lg:text-[70px] leading-[0.95] tracking-[1px]">
            <span className="block">
              PCOD Sirf Hormonal
            </span>

            <span className="block">
              Problem Nahi{" "}
              <span className="text-[#8a3fae]">Ho Sakta...</span>
            </span>
          </h1>

          {/* SUB TEXT */}
          <p className="mt-8 text-[#6f697c] text-[24px] leading-[1.45] font-normal max-w-[820px]">
            Kabhi kabhi body saalon se internal stress, emotional overload aur
            hormonal imbalance carry kar rahi hoti hai.
          </p>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[860px] text-[#746f80] text-[19px] sm:text-[20px] leading-[1.7]">
            A premium root-cause wellness consultation designed for women who
            are tired of random treatments, temporary management and constant
            confusion about their body.
          </p>

          {/* FEATURES */}
      <div className="mt-9 grid grid-cols-2 gap-x-20 gap-y-5 max-w-[760px] text-[#555164] text-[19px] leading-relaxed">

  <div className="flex items-center gap-3">
    <span className="text-[#5b3fa6] text-[22px] font-black leading-none">
      •
    </span>
    <p className="font-normal">Stress</p>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#5b3fa6] text-[22px] font-black leading-none">
      •
    </span>
    <p className="font-normal">Gut-health</p>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#5b3fa6] text-[22px] font-black leading-none">
      •
    </span>
    <p className="font-normal">Sleep</p>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#5b3fa6] text-[22px] font-black leading-none">
      •
    </span>
    <p className="font-normal">Emotional wellness</p>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#5b3fa6] text-[22px] font-black leading-none">
      •
    </span>
    <p className="font-normal">Energy balance</p>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#5b3fa6] text-[22px] font-black leading-none">
      •
    </span>
    <p className="font-normal">Hormonal rhythm</p>
  </div>

</div>
          {/* CTA BUTTON */}
          <a
            href="https://rzp.io/rzp/ydaKYJsq"
            className="mt-11 inline-flex items-center justify-center gap-4 rounded-full bg-[#5b46ad] hover:bg-[#4f3ca0] text-white h-[74px] px-14 text-[18px] font-bold uppercase shadow-[0_18px_35px_rgba(91,70,173,0.25)] transition-all duration-300"
          >
            Book ₹499 Root-Cause Assessment

            <span className="text-[24px]">→</span>
          </a>

          {/* BOTTOM TAGS */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] tracking-[4px] uppercase text-[#777080]">
            <span>✓ Private Consultation</span>
            <span>✓ Structured Evaluation</span>
            <span>✓ Premium Women Wellness</span>
          </div>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative lg:pl-6">

          <div className="relative max-w-[560px] mx-auto lg:ml-auto">

            {/* MAIN IMAGE */}
            <img
              src={heroImg}
              alt="Root cause wellness consultation"
              className="w-full h-[580px] sm:h-[680px] object-cover rounded-[36px] shadow-[0_25px_60px_rgba(54,36,87,0.18)]"
            />

            {/* PRICE BADGE */}
            <div className="absolute -top-5 -right-5 h-[80px] w-[80px] rounded-full bg-[#5c46ad] text-white flex items-center justify-center font-serif text-[26px] rotate-[18deg] shadow-[0_15px_35px_rgba(92,70,173,0.35)]">
              ₹499
            </div>

            {/* SLOT CARD */}
            <div className="absolute left-6 right-6 bottom-6 rounded-[24px] bg-white/92 backdrop-blur-md px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">

              <p className="text-[12px] tracking-[4px] uppercase text-[#5c46ad] font-normal">
                Today's Slots
              </p>

            <h3 className="mt-2 font-serif font-normal text-[#17111f] text-[24px] leading-tight">
  Limited Daily Consultations
</h3>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}