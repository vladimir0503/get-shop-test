import React from 'react';
import Banner from './banner/Banner';

import './VideoScreen.scss';

const VideoScreen = () => {

    return (
        <div className='videoWrapper'>
            <video muted="muted" autoplay="autoplay" loop>
                <source src="https://denis-creative.com/wp-content/uploads/2018/01/video.mp4" type="video/mp4" />
            </video>
            <Banner />
        </div>
    );
};

export default VideoScreen;
