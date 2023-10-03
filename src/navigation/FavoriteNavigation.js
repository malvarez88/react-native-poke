import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}
