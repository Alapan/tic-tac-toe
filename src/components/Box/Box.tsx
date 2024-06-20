import { useState } from 'react';
import Nought from '../Nought/Nought';
import styles from './Box.module.css';
import Cross from '../Cross/Cross';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGameMove,
  setIsGameOver,
  setIsMovePlayed,
  setLastBoxPlayed
} from '../../actions';
import { Matrix, MoveType } from '../../types';
import { State } from '../../state';

interface BoxProps {
  identifier: keyof Matrix;
}

const Box = ({ identifier }: BoxProps) => {
  const [boxValue, setBoxValue] = useState<MoveType>();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: State) => state.gameState.selectedValue);
  const isMovePlayed = useSelector((state: State) => state.gameState.isMovePlayed);
  const lastBoxPlayed = useSelector((state: State) => state.gameState.lastBoxPlayed);

  const handleOnMouseDown = () => {
    if (!isMovePlayed) {
      setBoxValue(selectedValue);
      dispatch(setLastBoxPlayed(identifier));
      dispatch(setIsMovePlayed(true));
    }

    const isBoxValueResetInSameMove = isMovePlayed &&
      lastBoxPlayed === identifier;

    if (isBoxValueResetInSameMove) {
      setBoxValue(MoveType.DEFAULT);
      dispatch(setIsMovePlayed(false));
      dispatch(setLastBoxPlayed(null));
    }
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
      className={styles.boxCls}
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
