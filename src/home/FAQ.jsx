import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this only for PCOD?",
      a: "No. This consultation may also help women experiencing stress overload, emotional exhaustion, sleep disturbance or hormonal imbalance patterns.",
    },
    {
      q: "Is this an online consultation?",
      a: "Yes. Consultations are conducted privately online.",
    },
    {
      q: "Is this only symptom-based guidance?",
      a: "No. The focus is on understanding deeper internal patterns instead of only surface symptoms.",
    },
    {
      q: "Will I receive personalized guidance?",
      a: "Yes. The consultation is structured around your individual wellness pattern and concerns.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="w-full bg-[#fbfaff] py-10 sm:py-12 px-3">
      <div className="mx-auto max-w-[760px]">
        
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ded6e9] bg-white/60 px-4 py-1.5 text-[10px] tracking-[4px] uppercase text-[#5d46a3]">
            <span className="text-[12px] leading-none">•</span>
            Common Questions
          </div>

          <h2 className="mt-5 font-serif text-[#171524] text-[32px] sm:text-[46px] leading-[1.08] font-normal tracking-[-0.8px]">
            Frequently <span className="text-[#7b4ba4]">Asked</span>
          </h2>
        </div>

        {/* FAQ */}
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-[20px] border border-[#e3dcef] bg-white/80 shadow-[0_6px_20px_rgba(122,75,164,0.03)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="font-serif text-[#171524] text-[16px] sm:text-[18px] leading-snug">
                    {f.q}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5d46a3] text-white text-[18px] font-semibold transition duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 -mt-1 text-[#6d6878] text-[14px] sm:text-[15px] leading-6">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}