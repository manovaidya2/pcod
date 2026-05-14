import React from "react";

export default function EmotionalReality() {
  const items = [
    "Constant fatigue",
    "Mood swings",
    "Emotional overwhelm",
    "Low motivation",
    "Disturbed sleep",
    "Internal stress",
    "Hormonal irregularity",
    "Mental exhaustion",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f2ff] py-10 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.75),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(139,78,178,0.12),transparent_45%)]" />

      <div className="relative max-w-[1160px] mx-auto px-4 sm:px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/45 px-4 sm:px-5 py-2 text-[9px] sm:text-[11px] tracking-[3px] sm:tracking-[5px] uppercase text-[#5d46a6] font-medium">
          <span className="mr-2 text-[12px] sm:text-[14px] leading-none">•</span>
          Emotional Reality
        </div>

        {/* Heading */}
        <h2 className="mt-6 sm:mt-8 font-serif text-[#17111f] text-[30px] sm:text-[46px] lg:text-[56px] leading-[1.12] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-1px]">
          “You Look Fine” Doesn’t Mean <br className="hidden sm:block" />
          <span className="text-[#8a3fae]">Your Body Feels Fine.</span>
        </h2>

        {/* Sub text */}
        <p className="mt-5 sm:mt-8 text-[#56536a] text-[17px] sm:text-[22px] leading-relaxed">
          Many women silently live with:
        </p>

        {/* Cards */}
        <div className="mt-7 sm:mt-11 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-x-4 sm:gap-y-3.5">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-h-[58px] sm:h-[70px] rounded-[18px] sm:rounded-[24px] border border-[#e3dcea] bg-white/85 flex items-center justify-center px-3 text-center text-[#272239] text-[13px] sm:text-[16px] font-normal shadow-[0_8px_25px_rgba(92,70,173,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="mt-8 sm:mt-12 font-serif italic text-[#3e314c] text-[18px] sm:text-[27px] leading-relaxed">
          And slowly... they start believing this exhaustion is “normal.”
        </p>
      </div>
    </section>
  );
}