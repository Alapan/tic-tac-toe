import { GameMove, MoveType } from "./types";

export const SET_MOVE = 'set/move';
export const SET_SELECTED_VALUE = 'set/selectedValue';

export const setGameMove = (gameMove: GameMove) => {
  return {
    type: SET_MOVE,
    payload: gameMove
  }
}

export const setSelectedValue = (value: MoveType) => {
  return {
    type: SET_SELECTED_VALUE,
    payload: value
  }
}
