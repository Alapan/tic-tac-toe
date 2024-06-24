import { GameMove, Matrix, MoveType, Point } from "./types";

export const SET_MOVE = 'set/move';
export const SET_SELECTED_VALUE = 'set/selectedValue';
export const SET_IS_GAME_OVER = 'set/isGameOver';
export const SET_IS_MOVE_PLAYED = 'set/isMovePlayed';
export const SET_LAST_BOX_PLAYED = 'set/lastBoxPlayed';
export const SET_BOX_CENTER_COORDINATES = 'set/boxCenterCoordinates';

export const setBoxCenterCoordinates = (point: Point, identifier: keyof Matrix) => {
  return {
    type: SET_BOX_CENTER_COORDINATES,
    payload: {
      point,
      identifier,
    },
  }
}

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

export const setIsGameOver = () => {
  return {
    type: SET_IS_GAME_OVER,
  }
}

export const setIsMovePlayed = (value: boolean) => {
  return {
    type: SET_IS_MOVE_PLAYED,
    payload: value
  }
}

export const setLastBoxPlayed = (value: keyof Matrix | null) => {
  return {
    type: SET_LAST_BOX_PLAYED,
    payload: value
  }
}
