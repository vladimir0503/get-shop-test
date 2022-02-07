import React from 'react';
import { Context } from '../../../Context';
import { Link } from 'react-router-dom';
import qr from '../../../images/qr-frame.png';

import './PromoWrapper.scss';

const PromoWrapper = ({ children }) => {

    const [indexBtn] = React.useContext(Context);

    return (
        <div className='promoWrapper'>
            {children}
            <div className='closeBlock'>
                <Link to='/'>
                    <button className={indexBtn === 12 ? 'active' : ''}>X</button>
                </Link>
                <img src={qr} alt="qr" />
            </div>
        </div>
    );
};

export default PromoWrapper;