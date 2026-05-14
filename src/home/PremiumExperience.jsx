import React from "react";

export default function PremiumExperience() {
  const items = [
    "Personalized discussion",
    "Deeper understanding",
    "Private consultation environment",
    "Structured root-cause evaluation",
    "Better doctor interaction experience",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf9ff] py-16 sm:py-20">
      <div className="mx-auto px-5 sm:px-7 lg:px-20 text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/50 px-5 py-2 text-[11px] tracking-[5px] uppercase text-[#5d46a6] font-medium">
          <span className="mr-2 text-[14px] leading-none">•</span>
          Premium Experience
        </div>

        {/* Heading */}
        <h2 className="mt-7 font-serif text-[#17111f] text-[36px] sm:text-[46px] lg:text-[50px] leading-[1.08] tracking-[-1.5px] font-normal">
          A Premium{" "}
          <span className="text-[#8a3fae]">Consultation Experience</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-[#4f4b66] text-[18px] sm:text-[20px] leading-relaxed">
          Intentionally designed with limited daily slots to ensure:
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-h-[175px] rounded-[24px] border border-[#d9c3f0] bg-gradient-to-br from-[#f6efff] to-[#ddccff] px-5 py-6 flex flex-col items-center justify-center shadow-[0_14px_40px_rgba(92,70,173,0.07)]"
            >
              <div className="text-[#5d46a6] text-[32px] leading-none mb-5">
                ✓
              </div>

              <p className="text-[#07020d] text-[15px] sm:text-[15px] leading-[1.35] font-medium ">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}