import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../Context';
import PhoneInput from '../phoneInput/PhoneInput';
import ButtonPanel from '../buttonPanel/ButtonPanel';

import './PhonePanel.scss';

const PhonePanel = () => {
    const [value, setValue] = React.useState('');
    const [isChecked, setChecked] = React.useState(false);

    const [indexBtn, setBtnIndex] = React.useContext(Context);

    const navigate = useNavigate();

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
                setBtnIndex(9);
                setValue(value.slice(0, -1));
                return;
            };

            if (e.key.match(/[0-9]/)) {
                setBtnIndex(e.key != 0 ? e.key - 1 : 10);
                handleNumBtn(e.key);
            };

            if (e.key === 'Enter') {
                e.preventDefault();
                if(indexBtn === null) return;

                if (indexBtn === 11 && !isChecked) return;

                if (indexBtn === 12) {
                    window.history.back();
                    return;
                } else if (indexBtn === 11 && isChecked && value.length === 10) {
                    navigate('/final');
                } else if (indexBtn === 9) {
                    setValue(value.slice(0, -1));
                } else {
                    handleNumBtn(indexBtn !== 10 ? indexBtn + 1 : 0);
                };
            };
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [value, indexBtn]);

    React.useEffect(() => {
        const clearBtnIndex = e => {
            if (e.key.match(/[0-9]/) || e.key === 'Backspace') {
                setBtnIndex(null);
            };
        };

        window.addEventListener('keyup', clearBtnIndex);
        return (() => window.removeEventListener('keyup', clearBtnIndex));
    }, [indexBtn])

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
                    className={`confirmBtn ${indexBtn === 11 ? 'active' : ''}`}
                >
                    Подтвердить номер
                </button>
            </Link>
        </div>
    );
};

export default PhonePanel;