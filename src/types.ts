export interface Point {
  x: number;
  y: number;
}

export interface GameMove {
  position: string;
  type: MoveType;
}

export enum MoveType {
  DEFAULT = '',
  NOUGHT = 'nought',
  CROSS = 'cross'
}

export type Position = 'a1' | 'a2' | 'a3' | 'b1' | 'b2' | 'b3' | 'c1' | 'c2' | 'c3';

export type Matrix = {
  [key in Position]: MoveType;
};
