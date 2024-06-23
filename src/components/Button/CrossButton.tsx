import { useDispatch } from 'react-redux';

import { setIsMovePlayed, setSelectedValue } from '../../actions';
import { MoveType } from '../../types';
import ButtonComponent from './ButtonComponent';

const CrossButton = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedValue(MoveType.CROSS));
    dispatch(setIsMovePlayed(false));
  }

  return (
    <ButtonComponent
      buttonText='X'
      onClick={handleClick}
    />
  );
}

export default CrossButton;
