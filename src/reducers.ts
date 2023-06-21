import { AnyAction } from "redux";
import { GameState } from "./state";
import { SET_MOVE, SET_SELECTED_VALUE } from "./actions";
import { GameMove, Matrix, MoveType } from "./types";

export const initialState: GameState = {
  matrix: {
    a1: MoveType.DEFAULT,
    b1: MoveType.DEFAULT,
    c1: MoveType.DEFAULT,
    a2: MoveType.DEFAULT,
    b2: MoveType.DEFAULT,
    c2: MoveType.DEFAULT,
    a3: MoveType.DEFAULT,
    b3: MoveType.DEFAULT,
    c3: MoveType.DEFAULT,
  }
}

const updateGameMatrix = (state: GameState, gameMove: GameMove) => {
  const positions: string[] = Object.keys(state.matrix);
  const clonedMatrix = Object.assign({}, state.matrix);
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === gameMove.position) {
      clonedMatrix[positions[i] as keyof Matrix] = gameMove.type
    }
  }
  return clonedMatrix;
}

export const gameReducer = (state: GameState = initialState, action: AnyAction): GameState => {
  switch (action.type) {
    case SET_MOVE: {
      return {
        ...state,
        matrix: updateGameMatrix(state, action.payload)
      }
    }

    case SET_SELECTED_VALUE: {
      return {
        ...state,
        selectedValue: action.payload
      }
    }

    default:
      return state;
  }
}
