import { Matrix, MoveType, Point, Position } from "./types";

export interface GameState {
  matrix: Matrix;
  selectedValue?: MoveType;
  isGameOver: boolean;
  isMovePlayed: boolean;
  lastBoxPlayed: keyof Matrix | null;
}

export type BoxState = {
  [key in Position]: Point;
};

export interface State {
  gameState: GameState;
  boxState: BoxState;
}
