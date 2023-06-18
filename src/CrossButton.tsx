import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './ButtonStyles';
import { StateContext } from './state';

const CrossButton: React.FC = () => {

  const handleClick = () => {
    dispatch({ type: 'cross' });
  }

  const classes = useStyles();
  const { dispatch } = useContext(StateContext);

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
