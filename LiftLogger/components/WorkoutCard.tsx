import { Workout } from "@/constants/Types";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export default function WorkoutCard(props: { workout: Workout }) {
  return (
    <View style={styles.container} colorKey="textBackground">
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
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  bigText: {
    fontSize: 20,
    marginBottom: 10,
  },
  smallText: {
    fontSize: 15,
  },
});
