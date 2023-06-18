import React, { useState } from 'react';
import Nought from './Nought';
import './Box.css';
import Cross from './Cross';
import { useDispatch, useSelector } from 'react-redux';
import { setGameMove } from './actions';
import { MoveType } from './types';
import { GameState } from './state';

interface BoxProps {
  identifier: string;
}

const Box = ({ identifier }: BoxProps) => {
  const [boxValue, setBoxValue] = useState<MoveType>();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: GameState) => state.selectedValue)

  const handleOnMouseDown = () => {
    setBoxValue(selectedValue);
  }

  const handleOnMouseUp = () => {
    dispatch(setGameMove({
      position: identifier,
      type: boxValue
    }))
  }

  return (
    <div
      className='box-cls'
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
    >
      {
        boxValue === 'nought' ?
        <Nought />: (boxValue === 'cross' ?
        <Cross />: null)
      }
    </div>
  );
}

export default Box;
