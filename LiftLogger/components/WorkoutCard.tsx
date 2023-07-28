import { Workout } from "@/constants/Types";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function WorkoutCard(props: { workout: Workout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.workout.date.toLocaleDateString()}</Text>
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
  text: {
    fontSize: 20,
    color: "white",
  },
});
