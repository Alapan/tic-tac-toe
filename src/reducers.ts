import { AnyAction } from "redux";
import { GameState } from "./state";
import { SET_MOVE, SET_SELECTED_VALUE } from "./actions";

export const initialState: GameState = {
  matrix: {
    a1: '',
    b1: '',
    c1: '',
    a2: '',
    b2: '',
    c2: '',
    a3: '',
    b3: '',
    c3: '',
  }
}

export const GameReducer = (state: GameState = initialState, action: AnyAction): GameState => {
  switch (action.type) {
    case SET_MOVE: {
      return {
        ...state,
        matrix: action.value
      }
    }

    case SET_SELECTED_VALUE: {
      return {
        ...state,
        selectedValue: action.value
      }
    }

    default:
      return state;
  }
}
