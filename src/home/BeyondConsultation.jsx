import React from "react";

export default function BeyondConsultation() {
  const points = [
    "Personalized wellness plans",
    "Ayurvedic support approaches",
    "Lifestyle guidance",
    "Gut-health support",
    "Stress-management direction",
    "Long-term internal balance programs",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf9ff] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">

        {/* Main Box */}
        <div className="rounded-[22px] sm:rounded-[30px] border border-[#d8c2f2] bg-gradient-to-br from-[#fbf7ff] via-[#efe2ff] to-[#d9c1ff] px-5 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-16 shadow-[0_24px_70px_rgba(92,70,173,0.08)]">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/45 px-4 sm:px-5 py-2 text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase text-[#5d46a6] font-medium">
            <span className="mr-2 text-[12px] sm:text-[13px] leading-none">
              •
            </span>
            Beyond The Consultation
          </div>

          {/* Heading */}
          <h2 className="mt-5 sm:mt-7 max-w-[820px] font-serif text-[#17111f] text-[28px] sm:text-[40px] lg:text-[46px] leading-[1.15] sm:leading-[1.12] tracking-[-0.8px] sm:tracking-[-1px] font-normal">
            For Women Looking For A More{" "}
            <span className="text-[#8a3fae]">
              Structured Long-Term Wellness Approach
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-7 text-[#4f4b66] text-[15px] sm:text-[17px] leading-relaxed max-w-[900px]">
            After consultation, eligible women may also receive guidance regarding:
          </p>

          {/* Points */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-[980px]">
            {points.map((point, index) => (
              <div
                key={index}
                className="min-h-[54px] sm:h-[58px] rounded-[18px] sm:rounded-[22px] border border-[#e4dcec] bg-white/75 flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-0 text-[#464252] text-[14px] sm:text-[17px] shadow-[0_12px_30px_rgba(92,70,173,0.05)]"
              >
                <span className="text-[#5d46a6] text-[15px] sm:text-[16px] shrink-0">
                  ✓
                </span>

                <span className="leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="mt-7 sm:mt-9 font-serif italic text-[#3e314c] text-[16px] sm:text-[18px] leading-relaxed">
            Because every body’s internal pattern is different.
          </p>

        </div>
      </div>
    </section>
  );
}