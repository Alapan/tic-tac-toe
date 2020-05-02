import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './ButtonStyles';
import { StateContext } from './state';

const NoughtButton: React.FC = () => {

    const handleClick = () => {
        dispatch({ type: 'nought' });
    }

    const classes = useStyles();
    const { dispatch } = useContext(StateContext);

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
