import { Matrix, MoveType } from "./types";

export interface GameState {
  matrix: Matrix,
  selectedValue?: MoveType
}

export interface State {
  gameState: GameState
}
