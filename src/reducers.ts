import { AnyAction } from "redux";
import { BoxState, GameState } from "./state";
import {
  SET_BOX_CENTER_COORDINATES,
  SET_IS_GAME_OVER,
  SET_IS_MOVE_PLAYED,
  SET_LAST_BOX_PLAYED,
  SET_MOVE,
  SET_SELECTED_VALUE
} from "./actions";
import { GameMove, Matrix, MoveType, Point } from "./types";

const initialGameState: GameState = {
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
  },
  isGameOver: false,
  isMovePlayed: false,
  lastBoxPlayed: null
};

const initialPoint: Point = {
  x: 0,
  y: 0,
};

const initialBoxState: BoxState = {
  a1: initialPoint,
  a2: initialPoint,
  a3: initialPoint,
  b1: initialPoint,
  b2: initialPoint,
  b3: initialPoint,
  c1: initialPoint,
  c2: initialPoint,
  c3: initialPoint,
};

const updateGameMatrix = (state: GameState, gameMove: GameMove) => {
  const positions: string[] = Object.keys(state.matrix);
  const clonedMatrix = Object.assign({}, state.matrix);
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === gameMove.position) {
      clonedMatrix[positions[i] as keyof Matrix] = gameMove.type
    }
  }
  return clonedMatrix;
};

const checkIsGameOver = (state: GameState): boolean => {
  const winningCombinations = [
    // Horizontal
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    // Vertical
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    // Diagonal
    ['a1', 'b2', 'c3'],
    ['a3', 'b2', 'c1'],
  ];
  let currentCombination = '';
  for (let winningCombination of winningCombinations) {
    for (let position of winningCombination) {
      if (state.matrix[position as keyof Matrix] === MoveType.NOUGHT) {
        currentCombination += 'N';
      }
      else if (state.matrix[position as keyof Matrix] === MoveType.CROSS) {
        currentCombination += 'C';
      }
      else if (state.matrix[position as keyof Matrix] === MoveType.DEFAULT) {
        currentCombination += 'E' // Empty
      }
    };
    if (currentCombination === 'NNN' || currentCombination === 'CCC') {
      break;
    } else {
      currentCombination = '';
      continue;
    }
  };
  if (!!currentCombination) {
    return true;
  }
  return false;
};

export const gameReducer = (state: GameState = initialGameState, action: AnyAction): GameState => {
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

    case SET_IS_GAME_OVER: {
      return {
        ...state,
        isGameOver: checkIsGameOver(state)
      }
    }

    case SET_IS_MOVE_PLAYED: {
      return {
        ...state,
        isMovePlayed: action.payload
      }
    }

    case SET_LAST_BOX_PLAYED: {
      return {
        ...state,
        lastBoxPlayed: action.payload
      }
    }

    default:
      return state;
  }
};

export const boxReducer = (state: BoxState = initialBoxState, action: AnyAction): BoxState => {
  switch (action.type) {
    case SET_BOX_CENTER_COORDINATES:
      return {
        ...state,
        [action.payload.identifier]: action.payload.point,
      }

    default:
      return state;
  }
}
