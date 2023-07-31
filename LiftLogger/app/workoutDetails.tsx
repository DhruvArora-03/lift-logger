import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { workoutData } from "./(tabs)/workouts";
import { useMemo } from "react";

export default function EditWorkoutScreen() {
  const { workoutId } = useLocalSearchParams();
  const workout = useMemo(() => {
    // if the workoutId is -1, we're creating a new workout
    if (workoutId === "-1") {
      workoutData.push({
        id: "this_is_new_id",
        name: "New Workout",
        date: new Date(),
        exercises: [],
      });

      return workoutData[workoutData.length - 1];
    }

    // otherwise, we're editing an existing workout
    const workout = workoutData.find((w) => w.id === workoutId);
    if (workout) {
      return workout;
    }

    // if we can't find the workout, some error:
    throw new Error(`Workout with id ${workoutId} not found`);
  }, [workoutId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      <Text>{workout.id}</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
