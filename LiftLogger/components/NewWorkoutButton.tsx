import { AntDesign } from "@expo/vector-icons";
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function NewWorkoutButton() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      onPress={() =>
        Alert.prompt(
          "New Workout",
          "Enter a name for your new workout:",
          (text: string) => {
            fetch("http://192.168.1.148:80/workouts", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: text,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                router.push({
                  pathname: "/workoutDetails",
                  params: { name: data.name },
                });
              })
              .catch((err) => Alert.alert(err.message));
          }
        )
      }
    >
      <AntDesign
        name="pluscircle"
        size={23}
        color={Colors[colorScheme ?? "light"].text}
        style={styles.unpressedButton}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  unpressedButton: {
    marginRight: 20,
    marginBottom: 5,
    opacity: 1,
  },
  pressedButton: {
    marginRight: 20,
    marginBottom: 5,
    opacity: 0.5,
  },
});
