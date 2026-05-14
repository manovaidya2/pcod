import React from "react";

export default function ApproachSection() {
  const surface = [
    "Surface symptoms",
    "Temporary management",
    "Generic advice",
    "Random supplements",
    "Isolated treatment approaches",
  ];

  const rootCause = [
    "Stress pattern",
    "Nervous system overload",
    "Sleep disturbance",
    "Gut-health",
    "Emotional exhaustion",
    "Hormonal rhythm imbalance",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf9ff] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

        {/* TOP CENTER CONTENT */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/60 px-4 sm:px-5 py-2 text-[9px] sm:text-[12px] tracking-[2px] sm:tracking-[3px] uppercase text-[#5d46a6] font-medium">
            <span className="mr-2 text-[12px] sm:text-[13px] leading-none">
              •
            </span>
            Why Most Approaches Fall Short
          </div>

          <h2 className="mt-5 sm:mt-7 font-serif text-[#17111f] text-[30px] sm:text-[46px] lg:text-[56px] leading-[1.1] sm:leading-[1.05] tracking-[-1px] sm:tracking-[-2px] font-normal">
            “This Is Why Many Women{" "}
            <span className="text-[#8a3fae]">Still Feel Stuck...</span>”
          </h2>

          <p className="mt-4 sm:mt-6 text-[#56536a] text-[15px] sm:text-[18px] leading-relaxed max-w-[850px] mx-auto">
            Not because they are careless. But because most approaches only
            focus on:
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-8 sm:mt-14 grid lg:grid-cols-2 gap-5 sm:gap-7">

          {/* LEFT CARD */}
          <div className="rounded-[22px] sm:rounded-[28px] border border-[#ffcaca] bg-white px-5 py-6 sm:px-9 sm:py-9 lg:px-10 lg:py-10">
            <p className="text-[#ff3045] text-[10px] sm:text-[13px] tracking-[4px] sm:tracking-[6px] uppercase font-medium">
              Surface Approach
            </p>

            <div className="mt-5 sm:mt-8 space-y-4 sm:space-y-5">
              {surface.map((item, index) => (
                <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <span className="text-[#ff3045] text-[20px] sm:text-[24px] leading-none font-light">
                    ×
                  </span>

                  <span className="text-[#23213a] text-[15px] sm:text-[19px] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[22px] sm:rounded-[28px] border border-[#d5bff3] bg-[#e7d9ff] px-5 py-6 sm:px-9 sm:py-9 lg:px-10 lg:py-10">
            <p className="text-[#5d46a6] text-[10px] sm:text-[13px] tracking-[4px] sm:tracking-[6px] uppercase font-medium">
              Root-Cause Approach
            </p>

            <div className="mt-5 sm:mt-8 space-y-4 sm:space-y-5">
              {rootCause.map((item, index) => (
                <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <span className="text-[#5d46a6] text-[18px] sm:text-[21px] leading-none font-normal">
                    ✓
                  </span>

                  <span className="text-[#17111f] text-[15px] sm:text-[19px] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}