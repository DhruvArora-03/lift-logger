export type Workout = {
  id: string;
  date: Date;
  exercises: Exercise[];
};

export type Exercise = {
  id: string;
  name: string;
  sets: Set[];
};

export type Set = {
  id: string;
  weight: number;
  reps: number;
};
