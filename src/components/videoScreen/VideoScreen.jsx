import React from 'react';
import Banner from './banner/Banner';
import video from '../../videos/video.mp4'

import './VideoScreen.scss';

const VideoScreen = () => {

    return (
        <div className='videoWrapper'>
            <video muted="muted" autoplay="autoplay" loop>
                <source src={video} type="video/mp4" />
            </video>
            <Banner />
        </div>
    );
};

export default VideoScreen;
