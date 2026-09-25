import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { IWorkOutType } from "@/app/types/DataType";

interface WorkOutCardProps{
    workout:IWorkOutType
}

function WorkOutCard({workout}:WorkOutCardProps) {
    return (
      <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-[#24262a] bg-[#131518] transition hover:-translate-y-1 hover:border-[#ccff00]/40"
    >
      <div className="relative h-44 w-full overflow-hidden sm:h-48">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={300}  
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-2.5 py-0.5 text-[10px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-bold uppercase tracking-wide text-white">
          {workout.name}
        </h2>
        <p className="text-xs text-gray-400">{workout.equipment}</p>

        <div className="mt-1 flex items-center gap-4 border-t border-[#24262a] pt-3 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame size={14} /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={14} /> {workout.rating}
          </span>
        </div>
      </div>
    </Link>
    );
}

export default WorkOutCard;