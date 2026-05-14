import React from "react";

export default function ConnectedSystem() {
  const steps = [
    "Stress",
    "Sleep Disturbance",
    "Hormonal Imbalance",
    "Energy & Mood Changes",
  ];

  const points = [
    "Chronic stress may influence hormones",
    "Gut imbalance may affect emotional wellness",
    "Poor sleep may disturb recovery and energy",
    "Nervous system overload may increase exhaustion",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf9ff] py-16 sm:py-10">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-10">

        {/* TOP CONTENT */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/60 px-5 py-2 text-[11px] tracking-[3px] uppercase text-[#5d46a6] font-medium">
            <span className="mr-2 text-[13px] leading-none">•</span>
            One Connected System
          </div>

          <h2 className="mt-7 font-serif text-[#17111f] text-[42px] sm:text-[50px] lg:text-[54px] leading-[1.08] tracking-[-2px] font-normal">
            Your Body Is{" "}
            <span className="text-[#8a3fae]">
              One Connected System
            </span>
          </h2>

          <p className="mt-5 max-w-[760px] mx-auto text-[#56536a] text-[17px] leading-[1.45]">
            At Manovaidya, we do not look at PCOD as just a “period issue.”
            The body's systems constantly influence each other.
          </p>
        </div>

        {/* FLOW */}
        <div className="mt-14 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className="w-full lg:w-[260px] h-[72px] rounded-[24px] border border-[#d2b8f5] bg-white flex items-center justify-center px-5 text-center font-serif text-[#17111f] text-[18px] whitespace-nowrap shadow-[0_8px_25px_rgba(92,70,173,0.04)]">
                {step}
              </div>

              {index !== steps.length - 1 && (
                <div className="text-[#5d46a6] text-[22px] hidden lg:block">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* POINTS */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="min-h-[76px] rounded-[24px] border border-[#e4dcec] bg-white flex items-center gap-5 px-7 shadow-[0_8px_25px_rgba(92,70,173,0.04)]"
            >
              <span className="text-[#5d46a6] text-[18px] leading-none">
                ◆
              </span>

              <span className="text-[#1f1b35] text-[19px] leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}