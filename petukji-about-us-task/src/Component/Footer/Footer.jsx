import React from 'react';
import { IoIosCall } from 'react-icons/io';
import { AiFillFacebook } from 'react-icons/ai';
import { BsFillEnvelopeFill, BsFillHouseDoorFill, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer__main bg-[#181B1D]'>
            <div className="container mx-auto max-w-screen-xl py-16">
                <div className="grid grid-cols-3 gap-16">
                    <div className="company__detail">
                        <h1 className='text-white text-4xl font-semibold'>We Care for Your Hunger</h1>
                        <p className='mt-3 text-gray-400'>Street Food Restaurants's <br /> Food Sweet & More</p>
                    </div>
                    <div className="company__contact">
                        <h1 className='text-white text-2xl font-semibold mb-6'>Contact Info</h1>
                        <p className='mt-3 text-gray-400 flex items-center my-2'> <span className='mr-2'><IoIosCall /></span> +91-11-71279904
                            (11:00 AM to 6:00 PM)</p>
                        <a className='mt-3 text-gray-400 flex items-center my-2 hover:text-orange-600' href="mailto: customer.care@petukji.in"><span className='mr-2'>
                            <BsFillEnvelopeFill />
                        </span>customer.care@petukji.in
                            (Preferred Way)
                        </a>
                        <p >  </p>
                    </div>
                    <div className="company__location">
                        <h1 className='text-white text-2xl font-semibold mb-6'>Office Location</h1>
                        <p className='mt-3 text-[#3A9947] flex items-center my-2'> <span className='mr-2'><BsFillHouseDoorFill /></span> Petuk Ji Pvt. Ltd</p>
                        <p className='mt-3 text-gray-400 my-2'> MIET incubation Center, MIET, Admin Block, NH-58, Baghpat Road, Bypass Crossing, Meerut, U.P, <span className='text-[#3A9947]'>India.</span></p>
                        <p className='text-[#3A9947] text-xl flex items-center'>Petuk Ji :
                            <a className='text-gray-500 hover:text-[#3A9947] ml-3' href="mailto: customer.care@petukji.in"><BsFillEnvelopeFill/></a>
                            <a className='text-gray-500 hover:text-[#3A9947] ml-3' href='https://www.facebook.com/petukji.in'><AiFillFacebook/></a>
                            <a className='text-gray-500 hover:text-[#3A9947] ml-3' href='https://www.youtube.com/channel/UCzi99e6_rOnvOzUP41Kyfng'><BsYoutube/></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;