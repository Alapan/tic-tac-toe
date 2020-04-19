import React, { useState, useContext } from 'react';
import Nought from './Nought';
import './Box.css';
import { StateContext } from './state';
import Cross from './Cross';

const Box: React.FC = () => {

    const [clicked, setClicked] = useState<boolean>(false);
    let boxCls: string = 'box-cls';

    const { state } = useContext(StateContext);

    boxCls = clicked ? 'box-cls clicked' : 'box-cls';

    const handleClick = () => {
        setClicked(!clicked);
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