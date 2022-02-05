import React from 'react';
import PromoWrapper from '../common/promoWrapper/PromoWrapper';

import './FinalScreen.scss';

const FinalScreen = () => {
    return (
        <PromoWrapper>
            <div className='successBlock'>
                <h1>ЗАЯВКА <br></br> ПРИНЯТА</h1>
                <p>Держите телефон под рукой.<br></br>
                    Скоро с Вами свяжется наш менеджер. </p>
            </div>
        </PromoWrapper>
    );
};

export default FinalScreen;