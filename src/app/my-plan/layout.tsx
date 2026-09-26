"use client";
import Link from "next/link";
import { ReactNode, useContext } from "react";
import { ChevronDown } from "lucide-react";
import { PlansContext } from "../context/PlansContext";

function MyPlanLayOut({ children }: { children: ReactNode }) {
  const {
    planCount,
    SavedCount,
    PlanMinutes,
    PlanCalories,
    SavedMinutes,
    SavedCalories,
    isActive,
    setIsActive,
    sortBy,
    setSortBy,
  } = useContext(PlansContext);

  return (
    <div className="px-4 py-8 lg:px-20 lg:py-12">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold uppercase text-white sm:text-3xl">
          My Plan
        </h1>
        <p className="text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-[#24262a] bg-[#131518] px-6 py-5 sm:px-10">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-400">Exercises</p>
          <p className="text-2xl font-bold text-[#ccff00] sm:text-3xl">
            {isActive === "Plan" ? planCount : SavedCount}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-400">Minutes</p>
          <p className="text-2xl font-bold text-white sm:text-3xl">
            {isActive === "Plan" ? PlanMinutes : SavedMinutes}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-400">Calories</p>
          <p className="text-2xl font-bold text-white sm:text-3xl">
            {isActive === "Plan" ? PlanCalories : SavedCalories}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center justify-between gap-3">
        <div className="flex w-fit items-center gap-1 rounded-full border border-[#24262a] bg-[#131518] p-1">
          <Link
            href="/my-plan"
            onClick={() => setIsActive("Plan")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
              isActive === "Plan"
                ? "bg-[#e5e5e5] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </Link>

          <Link
            href="/my-plan/saved"
            onClick={() => setIsActive("Saved")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
              isActive === "Saved"
                ? "bg-[#e5e5e5] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-400 sm:text-sm">Sort By</p>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "Duration" | "Calories" | "Rating")}
              className="appearance-none rounded-md border border-[#24262a] bg-[#131518] py-1.5 pl-3 pr-7 text-xs text-white outline-none sm:pr-8 sm:text-sm"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default MyPlanLayOut;