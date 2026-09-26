"use client";
import Image from "next/image";
import { Clock, Flame, Star, X } from "lucide-react";
import { useContext } from "react";
import { PlansContext } from "@/app/context/PlansContext";
import Link from "next/link";

function SavedItemCard() {
  const { savedPlan, setSavedPlan, setSavedCount, setSavedMinutes, setSavedCalories } = useContext(PlansContext);

  const handleRemove = (item: (typeof savedPlan)[number]) => {
    setSavedPlan(savedPlan.filter((w) => w.id !== item.id));
    setSavedCount((count) => count - 1);
    setSavedMinutes((min) => min - item.duration);
    setSavedCalories((cal) => cal - item.caloriesBurned);
  };

  if (savedPlan.length === 0) {
    return (
      <div className="flex h-60 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-[#24262a] px-4 text-center sm:h-72">
        <h2 className="text-lg font-bold uppercase text-white sm:text-xl">
          Nothing here yet
        </h2>
        <p className="max-w-xs text-xs text-gray-400 sm:text-sm">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full bg-[#ccff00] px-5 py-2 text-xs font-bold text-black transition hover:brightness-110 sm:text-sm"
        >
          Go to workouts
        </Link>
      </div>
    )
  }

  return savedPlan.map((item) => (
    <div
      key={item.id}
      className="flex flex-col gap-4 rounded-2xl border border-[#24262a] bg-[#131518] p-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold uppercase text-white sm:text-base">
            {item.name}
          </h3>
          <p className="text-xs text-gray-400">{item.equipment}</p>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <p className="flex items-center gap-1">
              <Clock size={12} /> {item.duration} min
            </p>
            <p className="flex items-center gap-1">
              <Flame size={12} /> {item.caloriesBurned} kcal
            </p>
            <p className="flex items-center gap-1">
              <Star size={12} /> {item.rating}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Link href={`/workout/${item.id}`}>
        <button className="rounded-full border border-[#24262a] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#191c1e] sm:text-sm">
          View Details
        </button>
        </Link>

        <button
          aria-label="Remove from plan"
          onClick={() => handleRemove(item)}
          className="rounded-full p-1.5 text-gray-500 transition hover:bg-[#191c1e] hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  ));
}

export default SavedItemCard;