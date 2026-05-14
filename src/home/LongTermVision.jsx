import React from "react";

export default function LongTermVision() {
  const cards = [
    "More stable",
    "More energetic",
    "More emotionally calm",
    "More internally balanced",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4ecff] py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-12 text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/55 px-4 py-2 text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase text-[#5d46a6] font-medium">
          <span className="mr-2 text-[12px] leading-none">•</span>
          Long-Term Vision
        </div>

        {/* Heading */}
        <h2 className="mt-5 sm:mt-6 font-serif text-[#17111f] text-[30px] sm:text-[46px] lg:text-[54px] leading-[1.08] sm:leading-[1.05] tracking-[-1px] sm:tracking-[-2px] font-normal">
          “The Goal Is Not{" "}
          <span className="italic">Temporary Relief...</span>”
        </h2>

        {/* Purple Sub Heading */}
        <p className="mt-4 sm:mt-6 font-serif text-[#8a3fae] text-[18px] sm:text-[27px] leading-[1.4] sm:leading-[1.35] font-normal max-w-[920px] mx-auto">
          The Goal Is Helping The Body Move Toward Long-Term Internal Balance.
        </p>

        {/* Description */}
        <p className="mt-4 sm:mt-5 max-w-[680px] mx-auto text-[#696477] text-[15px] sm:text-[17px] leading-[1.6] sm:leading-[1.45] font-normal">
          Because true wellness is not just about controlling symptoms for a few
          days. It is about helping the body feel:
        </p>

        {/* Cards */}
        <div className="mt-7 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((item, index) => (
            <div
              key={index}
              className="min-h-[112px] sm:h-[150px] rounded-[18px] sm:rounded-[24px] border border-[#d6bef5] bg-white/75 flex flex-col items-center justify-center px-3 sm:px-5 shadow-[0_12px_30px_rgba(92,70,173,0.05)]"
            >
              <div className="text-[#5d46a6] text-[18px] sm:text-[22px] leading-none mb-3 sm:mb-4">
                ✦
              </div>

              <p className="font-serif text-[#2f243c] text-[15px] sm:text-[19px] leading-[1.35] font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}