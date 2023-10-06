import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
