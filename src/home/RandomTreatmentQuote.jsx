import React from "react";

export default function RandomTreatmentQuote() {
  return (
    <section className="w-full bg-[#fbfaff] border-y border-[#eeeaf4] py-8 sm:py-10 lg:py-12 px-4">
      <div className="mx-auto  text-center">
        
        <h2 className="font-serif text-[#171524] text-[28px] sm:text-[46px] lg:text-[60px] leading-[1.12] font-normal tracking-[-0.5px]">
          “Your Body Does Not Need Another
          <br />
          <span className="text-[#7b4ba4]">
            Random Treatment.”
          </span>
        </h2>

        <p className="mt-6 sm:mt-7 font-serif italic text-[#242235] text-[18px] sm:text-[22px] lg:text-[24px] leading-snug">
          It Needs To Be Properly Understood.
        </p>

        <div className="mt-8 sm:mt-10 space-y-4 text-[#565d76]">
          
          <p className="text-[16px] sm:text-[16px] lg:text-[18px] leading-relaxed">
            Sometimes...the body is not fighting against you.
          </p>

          <p className="text-[16px] sm:text-[16px] lg:text-[18px] leading-relaxed">
            It is trying to communicate internal overload.
          </p>

          <p className="text-[16px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#161827]">
            And understanding that message may be the first step toward balance.
          </p>

        </div>
      </div>
    </section>
  );
}