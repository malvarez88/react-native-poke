import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoritesApi,
  isPokemonFavoriteApi,
  removePokemonFavoritesApi,
} from "../../api/favorites";

export default function Favorites(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorites = () => {
    setReloadCheck(!reloadCheck);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavoritesApi(id);
      onReloadCheckFavorites();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoritesApi(id);
      onReloadCheckFavorites();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      solid={isFavorite}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 10 }}
    />
  );
}
