import { Redirect } from "expo-router";

export default function App() {
  // automatically redirect to the workouts tab using expo-router
  return <Redirect href="/workouts" />;
}
