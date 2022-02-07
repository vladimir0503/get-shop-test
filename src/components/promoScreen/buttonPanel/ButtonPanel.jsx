import React from 'react';
import { Context } from '../../../Context';

import './ButtonPanel.scss';

const ButtonPanel = ({ enterNum, clear }) => {

    const [indexBtn, setBtn] = React.useContext(Context);

    const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'СТЕРЕТЬ', 0];

    const changeNum = val => {
        setBtn(null);
        if (val === 'СТЕРЕТЬ') {
            clear();
            return;
        } else {
            enterNum(val);
        };
    };

    return (
        <div className='buttonPanel' >
            {btns.map((btn, i) => (
                <button
                    key={i}
                    onClick={() => changeNum(btn)}
                    className={`numButton ${indexBtn == i ? 'active' : ''}`}>
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default ButtonPanel;
