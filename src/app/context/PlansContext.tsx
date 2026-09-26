"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IWorkOutType } from "../types/DataType";

interface PlansContextType {
  TodayPlan: IWorkOutType[];
  setTodayPlan: Dispatch<SetStateAction<IWorkOutType[]>>;
  savedPlan: IWorkOutType[];
  setSavedPlan: Dispatch<SetStateAction<IWorkOutType[]>>;
  planCount: number;
  setPlanCount: Dispatch<SetStateAction<number>>;
  SavedCount: number;
  setSavedCount: Dispatch<SetStateAction<number>>;
  PlanMinutes: number;
  setPlanMinutes: Dispatch<SetStateAction<number>>;
  PlanCalories: number;
  setPlanCalories: Dispatch<SetStateAction<number>>;
  SavedMinutes: number;
  setSavedMinutes: Dispatch<SetStateAction<number>>;
  SavedCalories: number;
  setSavedCalories: Dispatch<SetStateAction<number>>;
  isActive:string;
  setIsActive: Dispatch<SetStateAction<string>>;
  sortBy: "Duration" | "Calories" | "Rating";
  setSortBy: Dispatch<SetStateAction<"Duration" | "Calories" | "Rating">>;
}

export const PlansContext = createContext<PlansContextType>({
  TodayPlan: [],
  setTodayPlan: () => {},
  savedPlan: [],
  setSavedPlan: () => {},
  planCount: 0,
  setPlanCount: () => {},
  SavedCount: 0,
  setSavedCount: () => {},
  PlanMinutes: 0,
  setPlanMinutes: () => {},
  PlanCalories: 0,
  setPlanCalories: () => {},
  SavedMinutes: 0,
  setSavedMinutes: () =>{},
  SavedCalories: 0,
  setSavedCalories: () =>{},
  isActive:"Plan",
  setIsActive:() =>{},
  sortBy: "Duration",
  setSortBy: () => {},
});

function PlansProvider({ children }: { children: ReactNode }) {
  const [ TodayPlan, setTodayPlan ] = useState<IWorkOutType[]>([]);
  const [ savedPlan, setSavedPlan ] = useState<IWorkOutType[]>([]);
  const [ planCount, setPlanCount ] = useState<number>(0);
  const [ SavedCount, setSavedCount ] = useState<number>(0);
  const [ PlanMinutes, setPlanMinutes ] = useState<number>(0);
  const [ PlanCalories, setPlanCalories ] = useState<number>(0);
  const [ SavedMinutes, setSavedMinutes ] = useState<number>(0);
  const [ SavedCalories, setSavedCalories ] = useState<number>(0);
  const [isActive, setIsActive] = useState("Plan");
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">("Duration");

  const state = {
    TodayPlan,
    setTodayPlan,
    savedPlan,
    setSavedPlan,
    planCount,
    setPlanCount,
    SavedCount,
    setSavedCount,
    PlanMinutes,
    setPlanMinutes,
    PlanCalories,
    setPlanCalories,
    SavedMinutes,
    setSavedMinutes,
    SavedCalories,
    setSavedCalories,
    isActive,
    setIsActive,
    sortBy,
    setSortBy,
  };

  return (
    <PlansContext.Provider value={state}>{children}</PlansContext.Provider>
  );
}

export default PlansProvider;
