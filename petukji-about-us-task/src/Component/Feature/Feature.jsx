import React from 'react';
import { RiMapPin5Line } from 'react-icons/ri';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';

const Feature = () => {
    return (
        <div className="feature__main">
            <div className='container mx-auto max-w-screen-xl py-20'>
                <div className="feature__heading">
                    <h1 className='text-5xl font-bold text-[#262524] text-center'>Our Awesome Features</h1>
                    <p className='w-7/12 mx-auto my-6 text-[#5F6575] text-center'>We have 3 version of design on or app consumer view, restaurant view & pick up view. So, you don’t need to hire any other designers to make your app.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="feature__card p-10 rounded-[30px] hover:bg-[#e1f4e2] duration-300">
                        <div className="feature__icon border border-gray-400 inline-block p-3.5 rounded-lg mb-3">
                            <RiMapPin5Line />
                        </div>
                        <h4 className='text-2xl font-semibold mt-2.5'>Faster Delivery</h4>
                        <p className='text-[#5F6575] mt-3 font-light'>On this version only rides can use this. They can pick up orders from restaurants and deliver to customers</p>
                    </div>
                    <div className="feature__card p-10 rounded-[30px] hover:bg-[#e1f4e2] duration-300">
                        <div className="feature__icon border border-gray-400 inline-block p-3.5 rounded-lg mb-3">
                            <GiForkKnifeSpoon />
                        </div>
                        <h4 className='text-2xl font-semibold'>Amazing App</h4>
                        <p className='text-[#5F6575] mt-3 font-light'>On this version only rides can use this. They can pick up orders from restaurants and deliver to customers</p>
                    </div>
                    <div className="feature__card p-10 rounded-[30px] hover:bg-[#e1f4e2] duration-300">
                        <div className="feature__icon border border-gray-400 inline-block p-3.5 rounded-lg mb-3">
                            <BsFillPeopleFill />
                        </div>
                        <h4 className='text-2xl font-semibold'>24/7 Support</h4>
                        <p className='text-[#5F6575] mt-3 font-light'>On this version only rides can use this. They can pick up orders from restaurants and deliver to customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;