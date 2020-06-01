/*
 * action types
 */
export const TOGGLE_FAVORITE = `TOGGLE_FAVORITE`

export interface FavoriteState {
  favorite: boolean
}

interface ToggleFavAction {
  type: typeof TOGGLE_FAVORITE
  payload: FavoriteState
}

export type FavoriteActionTypes = ToggleFavAction
