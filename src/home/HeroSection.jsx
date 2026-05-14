import React from "react";
import heroImg from "../images/hero-woman.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4ecff] min-h-[calc(100vh-68px)] pb-20 sm:pb-0">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(126,74,183,0.20),transparent_35%),radial-gradient(circle_at_45%_70%,rgba(255,255,255,0.75),transparent_45%)]" />

      <div className="relative max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-8 grid lg:grid-cols-[1.35fr_0.9fr] gap-8 sm:gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="max-w-[980px] text-center lg:text-left">
          <div className="inline-flex items-center rounded-full border border-[#d9cdea] bg-white/45 backdrop-blur-sm px-4 sm:px-5 py-2 text-[9px] sm:text-[11px] tracking-[3px] sm:tracking-[5px] uppercase text-[#5d46a6] font-medium shadow-sm">
            <span className="mr-2 text-[12px] sm:text-[14px] leading-none">•</span>
            Root-Cause Wellness · For Women
          </div>

          <h1 className="mt-5 sm:mt-7 font-serif text-[#17111f] text-[36px] xs:text-[40px] sm:text-[56px] md:text-[66px] lg:text-[70px] leading-[1.02] lg:leading-[0.95] tracking-[0px] sm:tracking-[1px]">
            <span className="block">PCOD Sirf Hormonal</span>
            <span className="block">
              Problem Nahi{" "}
              <span className="text-[#8a3fae]">Ho Sakta...</span>
            </span>
          </h1>

          <p className="mt-5 sm:mt-7 text-[#6f697c] text-[17px] sm:text-[21px] lg:text-[24px] leading-[1.55] max-w-[820px] mx-auto lg:mx-0">
            Kabhi kabhi body saalon se internal stress, emotional overload aur
            hormonal imbalance carry kar rahi hoti hai.
          </p>

          <p className="mt-4 sm:mt-5 max-w-[860px] text-[#746f80] text-[14px] sm:text-[17px] lg:text-[20px] leading-[1.7] mx-auto lg:mx-0">
            A premium root-cause wellness consultation designed for women who
            are tired of random treatments, temporary management and constant
            confusion about their body.
          </p>

          {/* FEATURES */}
          <div className="mt-7 sm:mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-20 gap-y-4 sm:gap-y-5 max-w-[760px] mx-auto lg:mx-0 text-[#555164] text-[14px] sm:text-[17px] lg:text-[19px] leading-relaxed">
            {[
              "Stress",
              "Gut-health",
              "Sleep",
              "Emotional wellness",
              "Energy balance",
              "Hormonal rhythm",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 sm:gap-3">
                <span className="text-[#5b3fa6] text-[18px] sm:text-[22px] font-black leading-none">
                  •
                </span>
                <p className="font-normal text-left">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <a
            href="https://rzp.io/rzp/ydaKYJsq"
            className="mt-8 sm:mt-10 lg:mt-11 inline-flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-[#5b46ad] hover:bg-[#4f3ca0] text-white h-[54px] sm:h-[64px] lg:h-[74px] px-7 sm:px-10 lg:px-14 text-[13px] sm:text-[16px] lg:text-[18px] font-bold uppercase shadow-[0_18px_35px_rgba(91,70,173,0.25)] transition-all duration-300"
          >
            Book ₹499 Root-Cause Assessment
            <span className="text-[20px] sm:text-[24px]">→</span>
          </a>

          {/* BOTTOM TAGS */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-x-5 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-[10px] sm:text-[12px] lg:text-[14px] tracking-[2px] sm:tracking-[4px] uppercase text-[#777080]">
            <span>✓ Private Consultation</span>
            <span>✓ Structured Evaluation</span>
            <span>✓ Premium Women Wellness</span>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative lg:pl-6">
          <div className="relative max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] mx-auto lg:ml-auto">
            <img
              src={heroImg}
              alt="Root cause wellness consultation"
              className="w-full h-[420px] sm:h-[560px] lg:h-[680px] object-cover rounded-[26px] sm:rounded-[32px] lg:rounded-[36px] shadow-[0_25px_60px_rgba(54,36,87,0.18)]"
            />

            <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 h-[62px] w-[62px] sm:h-[74px] sm:w-[74px] lg:h-[80px] lg:w-[80px] rounded-full bg-[#5c46ad] text-white flex items-center justify-center font-serif text-[20px] sm:text-[24px] lg:text-[26px] rotate-[18deg] shadow-[0_15px_35px_rgba(92,70,173,0.35)]">
              ₹499
            </div>

            <div className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-4 sm:bottom-6 rounded-[18px] sm:rounded-[24px] bg-white/92 backdrop-blur-md px-4 sm:px-6 py-4 sm:py-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <p className="text-[10px] sm:text-[12px] tracking-[3px] sm:tracking-[4px] uppercase text-[#5c46ad] font-normal">
                Today's Slots
              </p>

              <h3 className="mt-2 font-serif font-normal text-[#17111f] text-[18px] sm:text-[22px] lg:text-[24px] leading-tight">
                Limited Daily Consultations
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}