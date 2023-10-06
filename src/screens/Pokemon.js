import { ActivityIndicator, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Favorites from "../components/Pokemon/Favorites";
import useAuth from "../hooks/useAuth";

export default function Pokemon(props) {
  const {
    route: { params },
    navigation,
  } = props;
  const { auth } = useAuth();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorites id={pokemon?.id} /> : undefined),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          onPress={navigation.goBack}
          style={{ marginLeft: 5 }}
        />
      ),
    });
  }, [navigation, params, auth, pokemon]);

  useEffect(() => {
    //self-executing anonymous function
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return pokemon ? (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  ) : (
    <ActivityIndicator size="large" />
  );
}
