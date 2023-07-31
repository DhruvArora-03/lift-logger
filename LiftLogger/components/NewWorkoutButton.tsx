import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

export default function NewWorkoutButton() {
  const colorScheme = useColorScheme();

  return (
    <Pressable onPress={() => {}}>
      {({ pressed }) => (
        <AntDesign
          name="pluscircle"
          size={23}
          color={Colors[colorScheme ?? "light"].text}
          style={pressed ? styles.pressedButton : styles.unpressedButton}
        />
      )}
    </Pressable>
  );

  // return (
  //   <Link
  //     href={{
  //       pathname: "/workoutDetails/",
  //       params: { workoutId: -1 },
  //     }}
  //     asChild
  //   >
  //     <Pressable onPress={() => {}}>
  //       {({ pressed }) => (
  //         <AntDesign
  //           name="pluscircle"
  //           size={23}
  //           color={Colors[colorScheme ?? "light"].text}
  //           style={pressed ? styles.pressedButton : styles.unpressedButton}
  //         />
  //       )}
  //     </Pressable>
  //   </Link>
  // );
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
