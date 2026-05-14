import React from "react";

export default function LongTermVision() {
  const cards = [
    "More stable",
    "More energetic",
    "More emotionally calm",
    "More internally balanced",
  ];

  return (
<section className="relative overflow-hidden bg-[#f4ecff] py-12 sm:py-14">
  <div className="mx-auto  px-40 text-center">

    {/* Badge */}
    <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/55 px-4 py-2 text-[10px] tracking-[4px] uppercase text-[#5d46a6] font-medium">
      <span className="mr-2 text-[12px] leading-none">•</span>
      Long-Term Vision
    </div>

    {/* Heading */}
    <h2 className="mt-6 font-serif text-[#17111f] text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-2px] font-normal">
      “The Goal Is Not{" "}
      <span className="italic">Temporary Relief...</span>”
    </h2>

    {/* Purple Sub Heading */}
    <p className="mt-6 font-serif text-[#8a3fae] text-[21px] sm:text-[27px] leading-[1.35] font-normal">
      The Goal Is Helping The Body Move Toward Long-Term Internal Balance.
    </p>

    {/* Description */}
    <p className="mt-5 max-w-[680px] mx-auto text-[#696477] text-[17px] leading-[1.45] font-normal">
      Because true wellness is not just about controlling symptoms for a few
      days. It is about helping the body feel:
    </p>

    {/* Cards */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {cards.map((item, index) => (
        <div
          key={index}
          className="h-[150px] rounded-[24px] border border-[#d6bef5] bg-white/75 flex flex-col items-center justify-center px-5 shadow-[0_12px_30px_rgba(92,70,173,0.05)]"
        >
          <div className="text-[#5d46a6] text-[22px] leading-none mb-4">
            ✦
          </div>

          <p className="font-serif text-[#2f243c] text-[19px] leading-[1.35] font-normal">
            {item}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}