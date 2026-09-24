import Image from "next/image";
import HeroImage from "@/assets/banner.png";

const BannarSection = () => {
  return (
    <section className="px-4 py-6 lg:px-20">
      <div className="flex flex-col items-center gap-8 rounded-2xl border border-[#24262a] bg-[#131518] px-6 py-10 text-center md:gap-10 md:px-12 md:py-14 lg:flex-row lg:justify-between lg:px-16 lg:py-16 lg:text-left">
        <div className="flex max-w-xl flex-col items-center gap-4 lg:items-start">
          <h3 className="text-[10px] font-semibold uppercase text-[#ccff00] md:text-xs">
            Workout Library
          </h3>

          <h1 className="text-4xl font-bold uppercase text-white sm:text-5xl md:text-6xl lg:text-[46px]">
            Train with intent. Log every set.
          </h1>

          <p className="text-sm text-gray-400 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today`s plan, and watch the week`s work add up.
          </p>

          <div className="pt-2">
            <button className="rounded-md bg-[#ccff00] px-5 py-2.5 text-xs font-bold uppercase text-black md:text-sm">
              Browse Workouts
            </button>
          </div>
        </div>

        <Image
          src={HeroImage}
          alt="Hero Image"
          width={400}
          height={400}
          className="h-auto w-56 sm:w-64 md:w-80 lg:w-[380px]"
        />
      </div>
    </section>
  );
};

export default BannarSection;
