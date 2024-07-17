import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setBoxCenterCoordinates,
  setGameMove,
  setIsGameOver,
  setIsMovePlayed,
  setLastBoxPlayed,
  setOriginCoordinates
} from '../../actions';
import { Matrix, MoveType, Point } from '../../types';
import { State } from '../../state';
import Nought from '../Nought/Nought';
import Cross from '../Cross/Cross';
import styles from './Box.module.css';

interface BoxProps {
  identifier: keyof Matrix;
}

const Box = ({ identifier }: BoxProps) => {
  const [boxValue, setBoxValue] = useState<MoveType>();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: State) => state.gameState.selectedValue);
  const isMovePlayed = useSelector((state: State) => state.gameState.isMovePlayed);
  const lastBoxPlayed = useSelector((state: State) => state.gameState.lastBoxPlayed);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleBoxResize = () => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      const centerCoordinates: Point = {
        x: rect.left + ((rect.right - rect.left) / 2),
        y: rect.top + ((rect.bottom - rect.top) / 2),
      };
      dispatch(setBoxCenterCoordinates(centerCoordinates, identifier));
      if (identifier === 'a1') {
        dispatch(setOriginCoordinates({
          x: rect.left,
          y: rect.top,
        }))
      }
    }
  }
  useEffect(() => {
    handleBoxResize();
    window.addEventListener('resize', handleBoxResize);
  }, []);

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
      ref={boxRef}
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
