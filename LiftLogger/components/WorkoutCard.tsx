import { Workout } from "@/constants/Types";
import { StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "react-native";

export default function WorkoutCard(props: { workout: Workout }) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>
        {props.workout.date.toLocaleDateString()} - {props.workout.name}
      </Text>
      {props.workout.exercises.map((exercise) => (
        <Text key={exercise.id} style={styles.smallText}>
          {exercise.name} - {exercise.sets.length}{" "}
          {exercise.sets.length > 1 ? "sets" : "set"}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  bigText: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 15,
    color: "white",
  },
});
