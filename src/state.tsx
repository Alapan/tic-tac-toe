import { Matrix, MoveType } from "./types";

export interface GameState {
  matrix: Matrix,
  selectedValue?: MoveType,
  isGameOver: boolean,
  isMovePlayed: boolean,
  lastBoxPlayed: keyof Matrix | null
}

export interface State {
  gameState: GameState
}
