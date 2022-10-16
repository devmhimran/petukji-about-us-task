import React from 'react';
import appScreenShort01 from '../../assets/petuk-ji-1.webp'
import appScreenShort02 from '../../assets/petuk-ji-2.webp'
import appScreenShort03 from '../../assets/petuk-ji-3.webp'
import appScreenShort04 from '../../assets/petuk-ji-4.webp'
import appScreenShort05 from '../../assets/petuk-ji-5.webp'
import appScreenShort06 from '../../assets/petuk-ji-6.webp'
import appScreenShort07 from '../../assets/petuk-ji-7.webp'
import appScreenShort08 from '../../assets/petuk-ji-8.webp'
import appScreenShort09 from '../../assets/petuk-ji-9.webp'

const AppScreenShot = () => {
    return (
        <div className='app__screen__short__main'>
            <div className="container mx-auto max-w-screen-xl py-36">
                <h1 className='text-center text-5xl font-bold'>App Screens</h1>
                <p className='w-7/12 mx-auto my-6 text-[#5F6575] text-center'>We have 3 version 
                of design on or app consumer view, restaurant view & pick up view. So, you don't need to hire any other designers to make your app.</p>

                <div className="app__screen__short rounded-[30px] bg-[#e1f4e2] h-[600px] relative">
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort01} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort02} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort03} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort04} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort05} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort06} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort07} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort08} alt="" />
                    <img className='w-60 absolute bottom-[10%] left-[50%] rounded-lg app__screenshot__image' src={appScreenShort09} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppScreenShot;