import { useDispatch } from 'react-redux';

import { setIsMovePlayed, setSelectedValue } from '../../actions';
import { MoveType } from '../../types';
import ButtonComponent from './ButtonComponent';

const NoughtButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedValue(MoveType.NOUGHT));
    dispatch(setIsMovePlayed(false));
  }

  return (
    <ButtonComponent
      color='secondary'
      buttonText='O'
      onClick={handleClick}
    />
  );
}

export default NoughtButton;
