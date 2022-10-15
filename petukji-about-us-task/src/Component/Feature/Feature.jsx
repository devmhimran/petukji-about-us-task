import React from 'react';
import { RiMapPin5Line } from 'react-icons/ri';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';

const Feature = () => {
    return (
        <div className="feature__main bg-[#f7f7f7]">
            <div className='container mx-auto max-w-screen-xl py-20'>
                <div className="feature__heading">
                    <h1 className='text-6xl font-bold text-[#262524]'>Our Awesome Features</h1>
                    <p className='w-7/12 my-6 text-[#5F6575]'>We have 3 versoin of design on or app cusomer view, resturant view & pick up view. So, you don’t need to hire any other designers to make your app.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="feature__card p-10 rounded-[30px] hover:bg-white duration-300">
                        <div className="feature__icon border inline-block p-3.5 rounded-lg">
                            <RiMapPin5Line />
                        </div>
                        <h4 className='text-2xl font-semibold mt-2.5'>Pick-up View</h4>
                        <p className='text-[#5F6575] mt-3 font-light'>On this version only rides can use this. They can pick up orders from restaurants and deliver to customers</p>
                    </div>
                    <div className="feature__card p-10 rounded-[30px] hover:bg-white duration-300">
                        <div className="feature__icon border inline-block p-3.5 rounded-lg">
                            <GiForkKnifeSpoon />
                        </div>
                        <h4 className='text-2xl font-semibold'>Restaurants View</h4>
                        <p className='text-[#5F6575] mt-3 font-light'>On this version only rides can use this. They can pick up orders from restaurants and deliver to customers</p>
                    </div>
                    <div className="feature__card p-10 rounded-[30px] hover:bg-white duration-300">
                        <div className="feature__icon border inline-block p-3.5 rounded-lg">
                            <BsFillPeopleFill />
                        </div>
                        <h4 className='text-2xl font-semibold'>Customer View</h4>
                        <p className='text-[#5F6575] mt-3 font-light'>On this version only rides can use this. They can pick up orders from restaurants and deliver to customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;