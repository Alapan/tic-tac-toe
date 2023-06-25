import React, { useState } from 'react';
import Nought from './Nought';
import './Box.css';
import Cross from './Cross';
import { useDispatch, useSelector } from 'react-redux';
import { setGameMove, setIsGameOver } from './actions';
import { MoveType } from './types';
import { State } from './state';

interface BoxProps {
  identifier: string;
}

const Box = ({ identifier }: BoxProps) => {
  const [boxValue, setBoxValue] = useState<MoveType>();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: State) => state.gameState.selectedValue)

  const handleOnMouseDown = () => {
    setBoxValue(selectedValue);
  }

  const handleOnMouseUp = () => {
    if (selectedValue) {
      dispatch(setGameMove({
        position: identifier,
        type: selectedValue
      }));
      dispatch(setIsGameOver());
    }
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
