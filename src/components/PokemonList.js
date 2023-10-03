import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

export default function PokemonList(props) {
  const { pokemons } = props;

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 15,
  },
});
