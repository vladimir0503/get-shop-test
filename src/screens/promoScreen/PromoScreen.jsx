import React from 'react';
import PhoneInput from './phoneInput/PhoneInput';
import ButtonPanel from './buttonPanel/ButtonPanel';

import './PromoScreen.scss';

const PromoScreen = () => {
  const [value, setValue] = React.useState('');
  const [isChecked, setChecked] = React.useState(false);

  const handleNumBtn = num => {
    if(value.length >= 10) return;
    setValue(value + num);
  };

  const clearNum = () => {
    setValue('');
  };

  React.useEffect(() => {
    const handleKeyDown = e => {
      console.log(e);
      if (e.key === 'Backspace') {
        setValue(value.slice(0, -1));
        return;
      };
      handleNumBtn(e.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [value]);

  return (
    <div className='promoWrapper'>
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
        <button disabled={value.length < 10} className='confirmBtn'>Подтвердить номер</button>
      </div>
    </div>
  );
};

export default PromoScreen;