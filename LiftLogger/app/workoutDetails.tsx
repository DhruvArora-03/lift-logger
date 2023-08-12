import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { workoutData } from "./(tabs)/workouts";
import { useMemo } from "react";

export default function EditWorkoutScreen() {
  const workout = useLocalSearchParams();

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
