"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, X } from "lucide-react";
import { useContext } from "react";
import { PlansContext } from "@/app/context/PlansContext";
import { IWorkOutType } from "@/app/types/DataType";
import { toast, Bounce } from "react-toastify";

function SavedItemCard({ workout }: { workout: IWorkOutType }) {
  const {
    savedPlan,
    setSavedPlan,
    setSavedCount,
    setSavedMinutes,
    setSavedCalories,
  } = useContext(PlansContext);

  const handleRemove = () => {
    setSavedPlan(savedPlan.filter((item) => item.id !== workout.id));
    setSavedCount((cnt) => cnt - 1);
    setSavedMinutes((min) => min - workout.duration);
    setSavedCalories((cal) => cal - workout.caloriesBurned);
    toast.warn("Remove Saved Plan Item!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#24262a] bg-[#131518] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold uppercase text-white sm:text-base">
            {workout.name}
          </h3>
          <p className="text-xs text-gray-400">{workout.equipment}</p>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <p className="flex items-center gap-1">
              <Clock size={12} /> {workout.duration} min
            </p>
            <p className="flex items-center gap-1">
              <Flame size={12} /> {workout.caloriesBurned} kcal
            </p>
            <p className="flex items-center gap-1">
              <Star size={12} /> {workout.rating}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-[#24262a] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#191c1e] sm:text-sm"
        >
          View Details
        </Link>

        <button
          aria-label="Remove from plan"
          onClick={handleRemove}
          className="rounded-full p-1.5 text-gray-500 transition hover:bg-[#191c1e] hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default SavedItemCard;
