import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import WorkoutCard from "@/components/WorkoutCard";

const workoutData = [
  {
    id: "15cb2e9e-eb2a-47bf-95b3-e694b3c19d77",
    date: new Date(2023, 2, 11), // 2023-02-11
    exercises: [
      {
        id: "fce8a95d-5cf2-4eac-853e-015fe6efb9f8",
        name: "Bench Press",
        sets: [
          {
            id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
            reps: 5,
            weight: 135,
          },
          {
            id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5e",
            reps: 5,
            weight: 185,
          },
          {
            id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5f",
            reps: 5,
            weight: 205,
          },
        ],
      },
    ],
  },
];

export default function Workouts() {
  return (
    <View style={styles.page}>
      {workoutData.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {},
});
