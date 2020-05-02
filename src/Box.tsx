import React, { useState, useContext } from 'react';
import Nought from './Nought';
import './Box.css';
import Cross from './Cross';
import { StateContext } from './state';

interface BoxProps {
    identifier: number
}

const Box: React.FC<BoxProps> = ({ identifier }) => {

    const [boxValue, setBoxValue] = useState<string>('');
    const { state, dispatch } = useContext(StateContext);

    const handleOnMouseDown = () => {
        setBoxValue(state.selectedValue)
    }

    const handleOnMouseUp = () => {
        dispatch({
            type: 'update',
            value: identifier
        });
    }

    return (
        <div
            className='box-cls'
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
        >
           {
               boxValue === 'nought' ?
               <Nought />: (boxValue === 'cross' ?
               <Cross />: null)
            }
        </div>
    );
}

export default Box;