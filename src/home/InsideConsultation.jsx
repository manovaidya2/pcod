import React from "react";

export default function InsideConsultation() {
  const steps = [
    {
      badge: "Step 1",
      number: "01",
      title: "Internal Pattern Evaluation",
      text: "We understand stress load, sleep quality, emotional wellness, energy patterns, digestion & gut-health, hormonal history.",
    },
    {
      badge: "Step 2",
      number: "02",
      title: "Root-Cause Discussion",
      text: "Doctor explains the possible deeper imbalance pattern affecting the body.",
    },
    {
      badge: "Step 3",
      number: "03",
      title: "Personalized Wellness Direction",
      text: "You receive clarity about what your body may actually need moving forward.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf9ff] py-12 sm:py-16">
      <div className="mx-auto px-5 lg:px-20">

        {/* Badge */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/50 px-5 py-2 text-[10px] tracking-[4px] uppercase text-[#5d46a6] font-medium">
            <span className="mr-2 text-[13px] leading-none">•</span>
            Inside The Consultation
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center font-serif text-[#17111f] text-[34px] sm:text-[48px] lg:text-[50px] leading-[1.08] tracking-[-1.5px] font-normal">
          What Happens Inside The{" "}
          <span className="text-[#7142a8]">
            ₹499 Root-Cause Assessment
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="relative h-full">

              {/* Step Badge */}
              <div className="absolute left-8 top-[-15px] z-10 rounded-full bg-[#5d46a6] px-5 py-1 text-white text-[11px] font-semibold uppercase tracking-[3px]">
                {step.badge}
              </div>

              {/* Card */}
              <div className="h-full min-h-[320px] rounded-[26px] border border-[#e4dcec] bg-white px-8 py-14 shadow-[0_18px_45px_rgba(92,70,173,0.08)] flex flex-col">

                {/* Number */}
                <div className="font-serif text-[#e7dcfb] text-[48px] leading-none font-normal">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="mt-4 font-serif text-black text-[23px] leading-[1.35] font-medium">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[#69677c] text-[17px] leading-[1.55]">
                  {step.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}