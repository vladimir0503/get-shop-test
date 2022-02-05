import React from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from '../phoneInput/PhoneInput';
import ButtonPanel from '../buttonPanel/ButtonPanel';

import './PhonePanel.scss';

const PhonePanel = () => {
    const [value, setValue] = React.useState('');
    const [isChecked, setChecked] = React.useState(false);

    const handleNumBtn = num => {
        if (value.length >= 10) return;
        setValue(value + `${num}`);
    };

    const clearNum = () => {
        setValue('');
    };

    React.useEffect(() => {

        const handleKeyDown = e => {
            if (e.key === 'Backspace') {
                setValue(value.slice(0, -1));
                return;
            };

            if (e.key.match(/[0-9]/)) {
                handleNumBtn(e.key);
            };
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [value]);

    return (
        <div className='phonePanel'>
            <PhoneInput value={value} />
            <ButtonPanel enterNum={handleNumBtn} clear={clearNum} />
            <div className='checkboxWrapper'>
                <div className='checkboxBlock'>
                    <div className={`fakeCheckbox ${isChecked ? 'active' : ''}`}></div>
                    <input className='consentCheck' onChange={e => setChecked(e.target.checked)} type='checkbox'></input>
                </div>
                <label>Согласие на обработку персональных данных</label>
            </div>
            <Link to='/final'>
                <button
                    disabled={value.length < 10 || !isChecked}
                    className='confirmBtn'
                >
                    Подтвердить номер
                </button>
            </Link>
        </div>
    );
};

export default PhonePanel;
