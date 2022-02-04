import React from 'react';

import './ButtonPanel.scss';

const ButtonPanel = ({ enterNum, clear }) => {

    const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'СТЕРЕТЬ', 0];

    const changeNum = val => {
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
                    className='numButton'>
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default ButtonPanel;
