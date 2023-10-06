import { useState, useCallback } from "react";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavoritesApi } from "../api/favorites";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NotLogged from "../components/NotLogged";

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoritesApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              image:
                pokemonDetail.sprites.other["official-artwork"].front_default,
            });
          }
          setFavorites(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLogged /> : <PokemonList pokemons={favorites} />;
}
