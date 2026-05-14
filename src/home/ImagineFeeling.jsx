import React from "react";

export default function ImagineFeeling() {
  const feelings = [
    "Mentally lighter",
    "More emotionally stable",
    "More connected with your body",
    "Energetic throughout the day",
    "Calm instead of constantly overwhelmed",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf9ff] py-12 sm:py-16">
      <div className="mx-auto  px-5 text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/45 px-5 py-2 text-[10px] tracking-[5px] uppercase text-[#5d46a6] font-medium">
          <span className="mr-2 text-[13px] leading-none">•</span>
          Imagine
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-serif text-[#17111f] text-[38px] sm:text-[48px] lg:text-[50px] leading-[1.08] tracking-[-1px] font-normal">
          Imagine{" "}
          <span className="text-[#8a3fae]">Feeling...</span>
        </h2>

        {/* List */}
        <div className="mt-12 space-y-4 max-w-[680px] mx-auto">
          {feelings.map((item, index) => (
            <div
              key={index}
              className="h-[62px] rounded-full border border-[#d8c2f2] bg-white flex items-center justify-center px-6 shadow-[0_8px_24px_rgba(92,70,173,0.05)]"
            >
              <p className="font-serif text-[#17111f] text-[17px] sm:text-[18px] leading-none">
                <span className="mr-2 text-[#17111f]">✦</span>
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-10 mx-auto max-w-[620px] font-serif italic text-[#3e314c] text-[17px] sm:text-[18px] leading-[1.55]">
          Because true wellness is not only about reports... It is about how your
          body and mind feel every single day.
        </p>

      </div>
    </section>
  );
}