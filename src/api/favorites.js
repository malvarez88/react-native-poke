import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonFavoritesApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    // return JSON.parse(response || "[]");
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoritesApi(id) {
  try {
    const favorites = await getPokemonFavoritesApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonFavoritesApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFavoritesApi(id) {
  try {
    const favorites = await getPokemonFavoritesApi();
    const newFavorite = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorite));
  } catch (error) {
    throw error;
  }
}
