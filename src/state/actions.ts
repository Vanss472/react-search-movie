/*
 * action creators
 */
import { FavoriteState, TOGGLE_FAVORITE, FavoriteActionTypes } from "./types"

// TypeScript infers that this function is returning ToggleFavAction
export function toggleFavorite(favorite: FavoriteState): FavoriteActionTypes {
  return {
    type: TOGGLE_FAVORITE,
    payload: favorite,
  }
}
