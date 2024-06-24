import { useSelector } from 'react-redux';

import { Point } from '../../types';
import styles from './Line.module.css';
import { State } from '../../state';

interface LineProps {
  startPoint: Point;
  endPoint: Point;
};

const Line = ({ startPoint, endPoint }: LineProps) => {
  const origin = useSelector((state: State) => state.originState.coordinates);
  const gridSize = useSelector((state: State) => state.gridState);

  return (
    <svg
      viewBox={`${origin.x} ${origin.y} ${gridSize.width} ${gridSize.height}`}
      className={styles.svgCls}
    >
      <line
        x1={startPoint.x}
        y1={startPoint.y}
        x2={endPoint.x}
        y2={endPoint.y}
        className={styles.lineCls}
      />
    </svg>
  );
};

export default Line;
