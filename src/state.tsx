import { Matrix, MoveType } from "./types";

export interface GameState {
  matrix: Matrix,
  selectedValue?: MoveType,
  isGameOver: boolean,
}

export interface State {
  gameState: GameState
}
