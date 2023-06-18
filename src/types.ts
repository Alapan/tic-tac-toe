export interface Matrix {
  a1: string;
  b1: string;
  c1: string;
  a2: string;
  b2: string;
  c2: string;
  a3: string;
  b3: string;
  c3: string;
}

export interface GameMove {
  position: string;
  type?: MoveType;
}

export enum MoveType {
  NOUGHT = 'nought',
  CROSS = 'cross'
}
