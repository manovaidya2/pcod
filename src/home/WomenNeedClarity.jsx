import React from "react";

export default function WomenNeedClarity() {
  const items = [
    "Different supplements",
    "Different diets",
    "Different routines",
    "Different advice",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f2ff] py-16 sm:py-20">
      <div className="mx-auto  px-40 text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/60 px-5 py-2 text-[12px] tracking-[3px] uppercase text-[#5d46a6] font-medium">
          <span className="mr-2 text-[13px] leading-none">•</span>
          What Women Actually Need
        </div>

        {/* Heading */}
        <h2 className="mt-7 font-serif text-[#17111f] text-[42px] sm:text-[52px] lg:text-[50px] leading-[1.05] tracking-[-2px] font-normal">
          Many Women Do Not Need Another <br />
          <span className="text-[#8a3fae]">Random Treatment...</span>
        </h2>

        {/* Sub heading */}
        <p className="mt-7 font-serif text-[#17111f] text-[27px] leading-tight font-normal">
          They Need Clarity.
        </p>

        <p className="mt-7 text-[#56536a] text-[18px] leading-relaxed">
          Because confusion itself becomes exhausting.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="h-[70px] rounded-[22px] border border-[#e4dcec] bg-white flex items-center justify-center px-5 text-[#242039] text-[16px] shadow-[0_8px_25px_rgba(92,70,173,0.04)]"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-12">
          <p className="font-serif italic text-[#17111f] text-[26px] leading-relaxed font-normal">
            Without truly understanding:
          </p>

          <p className="font-serif italic text-[#8a3fae] text-[27px] leading-relaxed font-normal">
            “Why does my body still not feel balanced?”
          </p>
        </div>

      </div>
    </section>
  );
}