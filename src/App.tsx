import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from './components/Box/Box';
import CrossButton from './components/Button/CrossButton';
import NoughtButton from './components/Button/NoughtButton';
import styles from './App.module.css';
import { State } from './state';
import { Point } from './types';
import Line from './components/Line/Line';
import { setGridSize } from './actions';

const App = () => {
  const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState<Point>({ x: 0, y: 0 });
  const winningCombination = useSelector((state: State) => state.gameState.winningCombination);
  const boxState = useSelector((state: State) => state.boxState);
  const gridRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const width = gridRef.current.offsetWidth;
        const height = gridRef.current.offsetHeight;
        dispatch(setGridSize({ width, height }));
      }

      if (winningCombination.length === 3) {
        setStartPoint(boxState[winningCombination[0]]);
        setEndPoint(boxState[winningCombination[2]]);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [winningCombination, boxState]);

  return (
    <div className={styles.container}>
      <div className={styles.gameGrid} ref={gridRef}>
        <Box identifier={'a1'}/>
        <Box identifier={'b1'}/>
        <Box identifier={'c1'}/>
        <Box identifier={'a2'}/>
        <Box identifier={'b2'}/>
        <Box identifier={'c2'}/>
        <Box identifier={'a3'}/>
        <Box identifier={'b3'}/>
        <Box identifier={'c3'}/>
      </div>
      <div className={styles.playButtons}>
        <CrossButton />
        <NoughtButton />
      </div>
      {
        winningCombination.length === 3 ? <Line startPoint={startPoint} endPoint={endPoint}/> : null
      }
    </div>
  );
}

export default App;
