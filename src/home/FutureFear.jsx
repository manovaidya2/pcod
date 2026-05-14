import React from "react";

export default function FutureFear() {
  const fears = [
    "Why does my body never feel internally balanced?",
    "Why do I constantly feel mentally exhausted?",
    "Will this affect my future fertility wellness?",
    "Why does everything feel harder now?",
    "Why am I emotionally drained all the time?",
  ];

  const impacts = [
    "Confidence",
    "Emotional calmness",
    "Productivity",
    "Relationships",
    "Feminine wellness",
    "Lifestyle quality",
    "Long-term hormonal wellness",
  ];

  return (
    <section className="relative bg-[#fbf9ff]">
      <div className="mx-auto max-w-[1550px] px-6 sm:px-10 lg:px-14 grid lg:grid-cols-[1fr_1fr] gap-16">

        {/* LEFT SCROLL CONTENT */}
        <div className="py-16 lg:py-24">
          <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/60 px-5 py-2.5 text-[10px] tracking-[5px] uppercase text-[#5d46a6] font-medium">
            <span className="mr-2 text-[13px] leading-none">•</span>
            The Deeper Question
          </div>

          <h2 className="mt-7 font-serif text-[#17111f] text-[38px] sm:text-[50px] lg:text-[58px] leading-[1.04] tracking-[-2px]">
            PCOD Is Not Always{" "}
            <span className="text-[#8a3fae]">Just</span>
            <br />
            <span className="text-[#8a3fae]">About Periods.</span>
          </h2>

          <p className="mt-7 text-[#56536a] text-[17px]">
            Sometimes the deeper fear quietly becomes:
          </p>

          <div className="mt-7 space-y-4">
            {fears.map((fear, index) => (
              <div
                key={index}
                className="flex items-center gap-5 rounded-[22px] border border-[#e4dcec] bg-white px-6 py-5 min-h-[74px] shadow-[0_10px_30px_rgba(92,70,173,0.05)]"
              >
                <span className="font-serif text-[#5d46a6] text-[26px] leading-none">
                  “
                </span>

                <span className="text-[#211b35] text-[18px] leading-relaxed">
                  {fear}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT STICKY CONTENT */}
        <div className="relative hidden lg:block">
          <div className="sticky top-0 min-h-screen flex items-center">
            <div className="w-full max-w-[680px]">
              <p className="text-[#68637a] text-[16px] leading-relaxed">
                Over time, internal imbalance may start affecting:
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {impacts.map((impact, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-[#cdb8ee] bg-[#f1eaff] px-4 py-2.5 text-[16px] text-[#5a4778]"
                  >
                    {impact}
                  </span>
                ))}
              </div>
<div className="mt-9 w-full rounded-[36px] bg-gradient-to-r from-[#f7f1ff] via-[#eadcff] to-[#d9c4fb] px-8 py-5 shadow-[0_18px_45px_rgba(92,70,173,0.10)]">
  <p className="font-serif font-normal italic text-[#2f243c] text-[24px] leading-[1.75] tracking-[-0.3px]">
    And the difficult part is... many women normalize these
    signals for years without understanding what the body
    may be trying to communicate.
  </p>
</div>
            </div>
          </div>
        </div>

        {/* MOBILE RIGHT CONTENT */}
        <div className="lg:hidden pb-16">
          <p className="text-[#68637a] text-[16px] leading-relaxed">
            Over time, internal imbalance may start affecting:
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {impacts.map((impact, index) => (
              <span
                key={index}
                className="rounded-full border border-[#cdb8ee] bg-[#f1eaff] px-4 py-2.5 text-[14px] text-[#5a4778]"
              >
                {impact}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-[26px] bg-[#dec9ff] px-7 py-7 shadow-[0_18px_45px_rgba(92,70,173,0.12)]">
            <p className="font-serif font-normal text-[#3e314c] text-[22px] leading-[1.5]">
              And the difficult part is...
              many women normalize these
              signals for years without
              understanding what the body
              may be trying to communicate.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}