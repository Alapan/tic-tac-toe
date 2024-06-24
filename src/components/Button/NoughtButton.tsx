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
      buttonText='O'
      onClick={handleClick}
      backgroundColor='#D3A22C'
      width='70px'
      height='50px'
    />
  );
}

export default NoughtButton;
