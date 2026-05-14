import React from "react";
import methodImg from "../images/wellness-still.jpg";

export default function MethodSection() {
  const methods = [
    {
      no: "01",
      title: "Stress & Nervous System Load",
      desc: "Understanding how chronic overload may influence the body internally.",
    },
    {
      no: "02",
      title: "Gut-Health & Digestion",
      desc: "The gut and hormones can deeply affect each other.",
    },
    {
      no: "03",
      title: "Sleep & Recovery",
      desc: "Because healing becomes difficult when recovery is disturbed.",
    },
    {
      no: "04",
      title: "Energy & Emotional Balance",
      desc: "Why many women feel constantly drained despite rest.",
    },
    {
      no: "05",
      title: "Hormonal Rhythm",
      desc: "Understanding how internal imbalance may affect the body’s natural flow.",
    },
  ];

  return (
    <section className="relative bg-[#fbf9ff]">
      <div className="mx-auto  px-6 lg:px-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">

        {/* LEFT STICKY */}
        <div className="relative">
          <div className="lg:sticky lg:top-0 lg:min-h-screen flex flex-col justify-center py-16 lg:py-20">
            
            <div className="inline-flex w-fit items-center rounded-full border border-[#ded4ea] bg-white/60 px-4 py-2 text-[9px] tracking-[4px] uppercase text-[#5d46a6] font-medium">
              <span className="mr-2 text-[12px] leading-none">•</span>
              The Method
            </div>

            <h2 className="mt-6 font-serif text-[#17111f] text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.02] tracking-[-1px] font-normal">
              The Manovaidya{" "}
              <span className="text-[#8a3fae]">Root-</span>
              <br />
              <span className="text-[#8a3fae]">Cause Approach</span>
            </h2>

            <p className="mt-5 max-w-[430px] font-serif italic text-[#6f6878] text-[15px] leading-[1.55]">
              We focus on understanding the deeper internal pattern — instead of
              only suppressing symptoms temporarily.
            </p>

            <div className="mt-8 w-full max-w-[460px] overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(92,70,173,0.08)]">
              <img
                src={methodImg}
                alt="Manovaidya root cause approach"
                className="h-[260px] sm:h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SCROLL CONTENT */}
        <div className="py-16 lg:py-20">
          <div className="space-y-4">
            {methods.map((item) => (
              <div
                key={item.no}
                className="rounded-[22px] border border-[#e1d8ec] bg-white px-10 py-7 lg:px-7 lg:py-7 shadow-[0_10px_30px_rgba(92,70,173,0.04)]"
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-[#b9a0db] text-[22px] leading-none min-w-[36px] pt-1">
                    {item.no}
                  </span>

                  <div>
                    <h3 className="font-serif font-normal text-[#17111f] text-[24px] leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[#56536a] text-[16px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}  