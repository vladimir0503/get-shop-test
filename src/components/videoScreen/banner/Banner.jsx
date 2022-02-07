import React from 'react';
import { Link } from 'react-router-dom';
import qr from '../../../images/qr.png';

import './Banner.scss';

const Banner = () => {
    const [bannerActive, setBanner] = React.useState(false)

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setBanner(true);
            clearTimeout(timerId);
        }, 5000);
    }, []);

    return (
        <>
            {
                bannerActive
                && <div className='banner'>
                    <h3>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br></br>
                        ПОДАРИТЕ ЕМУ СОБАКУ!</h3>
                    <img src={qr} alt='qr' />
                    <p>Сканируйте QR-код<br></br>
                        или нажмите ОК</p>
                    <Link to='/promo'>
                        <button>Ок</button>
                    </Link>
                </div>
            }
        </>
    );
};

export default Banner;
