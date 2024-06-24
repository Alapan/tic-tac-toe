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
      backgroundColor='#2C5DD3'
      width='70px'
      height='50px'
    />
  );
}

export default CrossButton;
