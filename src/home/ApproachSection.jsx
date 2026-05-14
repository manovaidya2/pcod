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
    <section className="relative overflow-hidden bg-[#fbf9ff] py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-6">
        
        {/* TOP CENTER CONTENT */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/60 px-5 py-2 text-[12px] tracking-[3px] uppercase text-[#5d46a6] font-medium">
            <span className="mr-2 text-[13px] leading-none">•</span>
            Why Most Approaches Fall Short
          </div>

          <h2 className="mt-7 font-serif text-[#17111f] text-[42px] sm:text-[54px] lg:text-[56px] leading-[1.05] tracking-[-2px] font-normal">
            “This Is Why Many Women{" "}
            <span className="text-[#8a3fae]">Still Feel Stuck...</span>”
          </h2>

          <p className="mt-6 text-[#56536a] text-[18px] leading-relaxed">
            Not because they are careless. But because most approaches only focus on:
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid lg:grid-cols-2 gap-7">
          
          {/* LEFT CARD */}
          <div className="rounded-[28px] border border-[#ffcaca] bg-white px-9 py-9 sm:px-10 sm:py-10">
            <p className="text-[#ff3045] text-[13px] tracking-[6px] uppercase font-medium">
              Surface Approach
            </p>

            <div className="mt-8 space-y-5">
              {surface.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-[#ff3045] text-[24px] leading-none font-light">
                    ×
                  </span>
                  <span className="text-[#23213a] text-[19px] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[28px] border border-[#d5bff3] bg-[#e7d9ff] px-9 py-9 sm:px-10 sm:py-10">
            <p className="text-[#5d46a6] text-[13px] tracking-[6px] uppercase font-medium">
              Root-Cause Approach
            </p>

            <div className="mt-8 space-y-5">
              {rootCause.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-[#5d46a6] text-[21px] leading-none font-normal">
                    ✓
                  </span>
                  <span className="text-[#17111f] text-[19px] leading-relaxed">
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