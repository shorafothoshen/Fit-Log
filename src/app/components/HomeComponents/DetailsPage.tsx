"use client";
import Image from "next/image";
import { Calendar, Bookmark } from "lucide-react";
import { IWorkOutType } from "@/app/types/DataType";
import { useContext } from "react";
import { PlansContext } from "@/app/context/PlansContext";
import { toast, Bounce } from "react-toastify";

const DetailsPage = ({ data }: { data: IWorkOutType }) => {
  const {
    TodayPlan,
    setTodayPlan,
    savedPlan,
    setSavedPlan,
    setPlanCount,
    setSavedCount,
    setPlanMinutes,
    setPlanCalories,
    setSavedMinutes,
    setSavedCalories,
  } = useContext(PlansContext);

  const isActivePlan = TodayPlan.some((item) => item.id === data.id);
  const isActiveSaved = savedPlan.some((item) => item.id === data.id);

  const HandleTodayPlan = (Hdata: IWorkOutType) => {
    if (isActivePlan) {
      toast.error("Not Added Today's Plan!", {
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
      return;
    }

    setTodayPlan([...TodayPlan, Hdata]);
    setPlanCount((cnt) => cnt + 1);
    setPlanMinutes((min) => min + Hdata.duration);
    setPlanCalories((cal) => cal + Hdata.caloriesBurned);
    toast.success("Today's Plan Add Successfully!", {
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

  const HandleSavedPlan = (Hdata: IWorkOutType) => {
    if (isActiveSaved) {
      toast.error("Not Added Saved Plan!", {
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
      return;
    }
    setSavedPlan([...savedPlan, Hdata]);
    setSavedCount((cnt) => cnt + 1);
    setSavedMinutes((min) => min + Hdata.duration);
    setSavedCalories((cal) => cal + Hdata.caloriesBurned);
    toast.success("Saved Plan Successfully!", {
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
    <div className="px-4 py-8 lg:px-20 lg:py-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="w-full overflow-hidden rounded-2xl lg:w-1/2">
          <Image
            src={data.image}
            alt={data.name}
            width={700}
            height={1200}
            className="h-72 w-full rounded-2xl object-cover sm:h-80 lg:h-[630px]"
            priority
          />
        </div>

        <div className="flex flex-col gap-5 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold uppercase text-white sm:text-3xl">
              {data.name}
            </h1>
            <p className="text-sm text-gray-400">{data.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.muscleGroups.map((items) => (
              <h1
                key={items}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[11px] font-bold uppercase text-black"
              >
                {items}
              </h1>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-[#24262a] bg-[#131518]">
            <div className="flex items-center justify-between border-b border-[#24262a] px-4 py-3 text-sm">
              <h1 className="text-xs uppercase tracking-wide text-gray-400">
                Equipment
              </h1>
              <h1 className="font-semibold text-white">{data.equipment}</h1>
            </div>

            <div className="flex items-center justify-between border-b border-[#24262a] px-4 py-3 text-sm">
              <h1 className="text-xs uppercase tracking-wide text-gray-400">
                Difficulty
              </h1>
              <h1 className="font-semibold text-white">{data.difficulty}</h1>
            </div>

            <div className="flex items-center justify-between border-b border-[#24262a] px-4 py-3 text-sm">
              <h1 className="text-xs uppercase tracking-wide text-gray-400">
                Sets
              </h1>
              <h1 className="font-semibold text-white">{data.sets}</h1>
            </div>

            <div className="flex items-center justify-between border-b border-[#24262a] px-4 py-3 text-sm">
              <h1 className="text-xs uppercase tracking-wide text-gray-400">
                Reps
              </h1>
              <h1 className="font-semibold text-white">{data.reps}</h1>
            </div>

            <div className="flex items-center justify-between border-b border-[#24262a] px-4 py-3 text-sm">
              <h1 className="text-xs uppercase tracking-wide text-gray-400">
                Duration
              </h1>
              <h1 className="font-semibold text-white">{data.duration} min</h1>
            </div>

            <div className="flex items-center justify-between border-b border-[#24262a] px-4 py-3 text-sm">
              <h1 className="text-xs uppercase tracking-wide text-gray-400">
                Calories
              </h1>
              <h1 className="font-semibold text-white">
                {data.caloriesBurned} kcal
              </h1>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <h1 className="text-xs uppercase tracking-wide text-gray-400">
                Rating
              </h1>
              <h1 className="font-semibold text-white">{data.rating}</h1>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              Instructions
            </h2>
            <ol className="flex flex-col gap-2">
              {data.instructions.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-400">
                  <h1 className="text-gray-500">{i + 1}.</h1>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              className="flex items-center gap-2 rounded-md bg-[#ccff00] px-4 py-2.5 text-xs font-bold uppercase text-black transition hover:brightness-110 sm:text-sm"
              onClick={() => HandleTodayPlan(data)}
            >
              <Calendar size={16} />
              Add to today&apos;s plan
            </button>
            <button
              className="flex items-center gap-2 rounded-md border border-[#24262a] px-4 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-[#191c1e] sm:text-sm"
              onClick={() => HandleSavedPlan(data)}
            >
              <Bookmark size={16} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
