type DifficultyType="Beginner" | "Intermediate" | "Advanced";

export interface IWorkOutType {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: DifficultyType;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}