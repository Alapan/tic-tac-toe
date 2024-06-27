import { Matrix, MoveType, Point, Position } from "./types";

export interface GameState {
  matrix: Matrix;
  selectedValue?: MoveType;
  isGameOver: boolean;
  isMovePlayed: boolean;
  lastBoxPlayed: keyof Matrix | null;
  winningCombination: Position[];
}

export type BoxState = {
  [key in Position]: Point;
};

export type OriginState = {
  coordinates: Point;
}

export type GridState = {
  width: number;
  height: number;
}

export interface State {
  gameState: GameState;
  boxState: BoxState;
  originState: OriginState;
  gridState: GridState;
}
