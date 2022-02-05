import React from 'react';
import { Link } from 'react-router-dom';
import qr from '../../../images/qr-frame.png';

import './PromoWrapper.scss';

const PromoWrapper = ({ children }) => {
    return (
        <div className='promoWrapper'>
            {children}
            <div className='closeBlock'>
                <Link to='/'>
                    <button>X</button>
                </Link>
                <img src={qr} alt="qr" />
            </div>
        </div>
    );
};

export default PromoWrapper;