export interface GameMove {
  position: string;
  type: MoveType;
}

export enum MoveType {
  DEFAULT = '',
  NOUGHT = 'nought',
  CROSS = 'cross'
}

export interface Matrix {
  a1: MoveType;
  b1: MoveType;
  c1: MoveType;
  a2: MoveType;
  b2: MoveType;
  c2: MoveType;
  a3: MoveType;
  b3: MoveType;
  c3: MoveType;
}
