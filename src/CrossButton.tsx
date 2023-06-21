import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './ButtonStyles';
import { setSelectedValue } from './actions';
import { MoveType } from './types';

const CrossButton = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedValue(MoveType.CROSS))
  }

  const classes = useStyles();

  return (
    <Button
      variant='contained'
      color='primary'
      className={classes.button}
      size='large'
      onClick={handleClick}
    >X</Button>
  );
}

export default CrossButton;
