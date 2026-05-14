import React from "react";

export default function WomenNeedClarity() {
  const items = [
    "Different supplements",
    "Different diets",
    "Different routines",
    "Different advice",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f2ff] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-12 text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/60 px-4 sm:px-5 py-2 text-[9px] sm:text-[12px] tracking-[2px] sm:tracking-[3px] uppercase text-[#5d46a6] font-medium">
          <span className="mr-2 text-[12px] sm:text-[13px] leading-none">
            •
          </span>
          What Women Actually Need
        </div>

        {/* Heading */}
        <h2 className="mt-5 sm:mt-7 font-serif text-[#17111f] text-[30px] sm:text-[46px] lg:text-[50px] leading-[1.1] sm:leading-[1.05] tracking-[-1px] sm:tracking-[-2px] font-normal">
          Many Women Do Not Need Another <br className="hidden sm:block" />
          <span className="text-[#8a3fae]">Random Treatment...</span>
        </h2>

        {/* Sub heading */}
        <p className="mt-5 sm:mt-7 font-serif text-[#17111f] text-[20px] sm:text-[27px] leading-tight font-normal">
          They Need Clarity.
        </p>

        <p className="mt-4 sm:mt-7 text-[#56536a] text-[15px] sm:text-[18px] leading-relaxed max-w-[720px] mx-auto">
          Because confusion itself becomes exhausting.
        </p>

        {/* Cards */}
        <div className="mt-7 sm:mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-h-[58px] sm:h-[70px] rounded-[18px] sm:rounded-[22px] border border-[#e4dcec] bg-white flex items-center justify-center px-3 sm:px-5 text-[#242039] text-[13px] sm:text-[16px] text-center shadow-[0_8px_25px_rgba(92,70,173,0.04)]"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-8 sm:mt-12">
          <p className="font-serif italic text-[#17111f] text-[20px] sm:text-[26px] leading-relaxed font-normal">
            Without truly understanding:
          </p>

          <p className="mt-2 font-serif italic text-[#8a3fae] text-[21px] sm:text-[27px] leading-relaxed font-normal">
            “Why does my body still not feel balanced?”
          </p>
        </div>

      </div>
    </section>
  );
}