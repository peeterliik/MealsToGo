import { StatusBar } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.sceen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
