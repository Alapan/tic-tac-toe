import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './ButtonStyles';
import { setIsMovePlayed, setSelectedValue } from './actions';
import { MoveType } from './types';

const NoughtButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedValue(MoveType.NOUGHT));
    dispatch(setIsMovePlayed(false));
  }

  const classes = useStyles();

  return (
    <Button
      variant='contained'
      color='secondary'
      className={classes.button}
      size='large'
      onClick={handleClick}
    >O</Button>
  );
}

export default NoughtButton;
