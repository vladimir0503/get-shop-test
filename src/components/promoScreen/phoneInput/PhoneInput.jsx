import React from 'react';
import InputMask from "react-input-mask";

import './PhoneInput.scss';

const PhoneInput = ({ value }) => {
    return (
        <div className='phoneInputWrapper'>
            <h3>Введите ваш номер<br></br>
                мобильного телефона</h3>
            <InputMask
                className='phoneInput'
                mask="+7 (999) 999-99-99"
                alwaysShowMask={true}
                value={value}
            />
            <p>и с Вами свяжется наш менеждер для<br></br> дальнейшей консультации</p>
        </div>
    );
};

export default PhoneInput;