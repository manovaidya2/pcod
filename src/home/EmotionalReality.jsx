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
    <section className="relative overflow-hidden bg-[#f7f2ff] py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.75),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(139,78,178,0.12),transparent_45%)]" />

      <div className="relative max-w-[1160px] mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/45 px-5 py-2 text-[11px] tracking-[5px] uppercase text-[#5d46a6] font-medium">
          <span className="mr-2 text-[14px] leading-none">•</span>
          Emotional Reality
        </div>

        {/* Heading */}
        <h2 className="mt-8 font-serif text-[#17111f] text-[42px] sm:text-[56px] lg:text-[56px] leading-[1.1] tracking-[-1px]">
          “You Look Fine” Doesn’t Mean <br />
          <span className="text-[#8a3fae]">Your Body Feels Fine.</span>
        </h2>

        {/* Sub text */}
        <p className="mt-8 text-[#56536a] text-[22px] leading-relaxed">
          Many women silently live with:
        </p>

        {/* Cards */}
        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3.5">
          {items.map((item, index) => (
            <div
              key={index}
              className="h-[70px] rounded-[24px] border border-[#e3dcea] bg-white/85 flex items-center justify-center text-[#272239] text-[16px] font-normal shadow-[0_8px_25px_rgba(92,70,173,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom line */}
       <p className="mt-12 font-serif font-normal font-normal italic text-[#3e314c] text-[24px] sm:text-[27px] leading-relaxed">
  And slowly... they start believing this exhaustion is “normal.”
</p>
      </div>
    </section>
  );
}