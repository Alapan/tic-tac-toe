import React, { useState, useContext } from 'react';
import Nought from './Nought';
import './Box.css';
import { StateContext } from './state';
import Cross from './Cross';

const Box: React.FC = () => {

    const [clicked, setClicked] = useState<boolean>(false);
    let boxCls: string = 'box-cls';

    const { state } = useContext(StateContext);

    boxCls = clicked && state.isBoxSelected ? 'box-cls clicked' : 'box-cls';

    const handleClick = () => {
        // Clicking currently active box
        if (clicked && state.isBoxSelected) {
            setClicked(false);
            state.isBoxSelected = false;
        } else if (!clicked && !state.isBoxSelected) {
        // No box is active
            setClicked(true);
            state.isBoxSelected = true;
        }
    }

    return (
        <div
            className={boxCls}
            onClick={handleClick}
        >
           {clicked ? (
               state.selectedValue === 'nought' ?
               <Nought />: (state.selectedValue === 'cross' ?
               <Cross />: null)
            ) : null}
        </div>
    );
}

export default Box;