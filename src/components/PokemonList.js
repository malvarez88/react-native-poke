// import { View, Text, FlatList } from "react-native";
// import React from "react";

// export default function PokemonList(props) {
//   const { pokemons } = props;
//   return (
//     <FlatList
//       data={pokemons}
//       numColumns={2}
//       showsVerticalScrollIndicator={false}
//       keyExtractor={(pokemon) => String(pokemon.id)}
//       renderItem={({ item }) => <Text>{item.name}</Text>}
//     />
//   );
// }

import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
