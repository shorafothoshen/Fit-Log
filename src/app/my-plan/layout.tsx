"use client";
import Link from "next/link";
import React, { ReactNode, useContext, useState } from "react";
import { PlansContext } from "../context/PlansContext";

interface LayoutProps {
  children: ReactNode;
}

function MyPlanLayOut({ children }: LayoutProps) {
  const {planCount,SavedCount,PlanMinutes,PlanCalories,SavedMinutes,SavedCalories} = useContext(PlansContext);

  const [isActive, setIsActive] = useState("Plan");

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

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit items-center gap-1 rounded-full border border-[#24262a] bg-[#131518] p-1">
          <Link
            href="/my-plan"
            onClick={() => setIsActive("Plan")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm ${
              isActive === "Plan"
                ? "bg-[#e5e5e5] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </Link>

          <Link
            href="/my-plan/saved"
            onClick={() => setIsActive("Saved")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm ${
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
          <select className="rounded-md border border-[#24262a] bg-[#131518] px-3 py-1.5 text-xs text-white outline-none sm:text-sm">
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default MyPlanLayOut;
