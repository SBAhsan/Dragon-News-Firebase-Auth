import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../QZone/QZone';
import bgImg from '../../assets/bg.png'


const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <img src={bgImg} className='w-full' />
        </div>
    );
};

export default RightAside;