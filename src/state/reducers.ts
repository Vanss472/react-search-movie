import { FavoriteState, FavoriteActionTypes, TOGGLE_FAVORITE } from "./types"
import { combineReducers } from "redux"

const initialState: FavoriteState = {
  favorite: false,
}

export function favoriteReducer(state = initialState, action: FavoriteActionTypes): FavoriteState {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      // console.log(`Click ${action.payload}`)
      // console.log(`Click ${state.favorite}`)
      return {
        ...state,
        favorite: !state.favorite,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ favorite: favoriteReducer })
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
