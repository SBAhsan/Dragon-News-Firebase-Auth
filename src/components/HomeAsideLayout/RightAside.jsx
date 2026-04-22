import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../QZone/QZone';
import bgImg from '../../assets/bg.png'


const RightAside = ({showBg = true}) => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            {showBg && <img src={bgImg} className='w-full h-[640px]' />}
        </div>
    );
};

export default RightAside;