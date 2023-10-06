import React from "react";
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return pokemons.length > 0 ? (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" style={styles.spinner} />
      }
    />
  ) : (
    //check this!!!!! ---> styles
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 50 : 20,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 80,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 120 : 80,
  },
});
