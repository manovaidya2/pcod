import React from "react";
import doctorImg from "../images/imghero.jpeg";

export default function DoctorSection() {
  const skills = [
    "Stress-related wellness",
    "Gut-brain axis understanding",
    "Emotional wellness",
    "Hormonal balance approaches",
    "Root-cause focused Ayurvedic systems",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fbf9ff] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 sm:gap-14 lg:gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative max-w-[420px] sm:max-w-[470px] mx-auto lg:mx-0">
          <img
            src={doctorImg}
            alt="Dr. Ankush Garg"
            className="w-full h-[420px] sm:h-[580px] object-cover rounded-[24px] sm:rounded-[30px] shadow-[0_28px_65px_rgba(92,70,173,0.14)]"
          />

          {/* VERIFIED CARD */}
          <div className="absolute right-[-8px] sm:right-[-22px] bottom-[-10px] sm:bottom-[-22px] rounded-[18px] sm:rounded-[22px] border border-[#e4dcec] bg-white px-4 sm:px-7 py-3 sm:py-5 shadow-[0_18px_40px_rgba(92,70,173,0.14)]">
            <p className="text-[#5d46a6] text-[8px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase font-medium">
              Verified
            </p>

            <p className="mt-1 font-serif text-[#3e314c] text-[14px] sm:text-[17px] leading-tight">
              Ayurvedic Neurologist
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-[920px] text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-[#ded4ea] bg-white/60 px-4 sm:px-6 py-2 sm:py-3 text-[9px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase text-[#5d46a6] font-medium">
            Dr. Ankush Garg
          </div>

          {/* Heading */}
          <h2 className="mt-5 sm:mt-6 font-serif text-[#17111f] text-[32px] sm:text-[46px] lg:text-[50px] leading-[1.08] sm:leading-[1.04] tracking-[-1px] sm:tracking-[-2px] font-normal">
            Meet Dr.{" "}
            <span className="text-[#8a3fae]">Ankush Garg</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-[#4f4b66] text-[17px] sm:text-[22px] leading-relaxed">
            Ayurvedic Neurologist & Root-Cause Wellness Expert
          </p>

          {/* Experience */}
          <p className="mt-6 sm:mt-8 text-[#4f4b66] text-[15px] sm:text-[17px]">
            Years of experience in:
          </p>

          {/* Skills */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-[980px]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-h-[58px] sm:h-[66px] rounded-[18px] sm:rounded-[22px] border border-[#e4dcec] bg-white flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-[#221d36] text-[14px] sm:text-[17px] shadow-[0_10px_26px_rgba(92,70,173,0.05)]"
              >
                <span className="text-[#5d46a6] text-[15px] sm:text-[17px] leading-none shrink-0">
                  ✓
                </span>

                <span className="text-left leading-snug">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="mt-7 sm:mt-10 max-w-[820px] font-serif italic text-[#4d415b] text-[18px] sm:text-[22px] leading-[1.7] sm:leading-[1.75] font-normal">
            The consultation is designed to help women understand what their body
            may actually be struggling with internally.
          </p>

        </div>

      </div>
    </section>
  );
}