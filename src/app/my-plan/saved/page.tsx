"use client";
import { useContext } from "react";
import { PlansContext } from "@/app/context/PlansContext";
import SavedItemCard from "@/app/components/planComponents/savedCard";
import Link from "next/link";

const Page = () => {
  const { savedPlan, sortBy } = useContext(PlansContext);

  const sortedSaved = [...savedPlan].sort((a, b) => {
    if (sortBy === "Duration") return a.duration - b.duration;
    if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "Rating") return b.rating - a.rating;
    return 0;
  });

  if (sortedSaved.length === 0) {
    return (
      <div className="flex h-60 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-[#24262a] px-4 text-center sm:h-72">
        <h2 className="text-lg font-bold uppercase text-white sm:text-xl">
          Nothing here yet
        </h2>
        <p className="max-w-xs text-xs text-gray-400 sm:text-sm">
          Browse the library and save a lift for later.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full bg-[#ccff00] px-5 py-2 text-xs font-bold text-black transition hover:brightness-110 sm:text-sm"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {sortedSaved.map((workout) => (
        <SavedItemCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default Page;