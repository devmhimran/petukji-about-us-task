import React from 'react';
import heroImage from '../../assets/petuk-ji-hero.jpg'

const Hero = () => {
    return (
        <div className='hero__main'>
            <div className="container mx-auto max-w-screen-xl py-20">
                <div className="grid grid-cols-2 gap-4">
                    <div className="hero__left flex items-center">
                        <div className="hero__content">
                            <div className="hero__heading">
                                <h1 className='text-[#262524] text-7xl leading-tight font-bold'>Street Food Restaurants's Food Sweet & More</h1>
                                <p className='py-3'>The best food delivery app with 3 version. Download and enjoy the app on Figma, XD & Sketch.</p>
                            </div>
                            <div className="download__button mt-3">
                                <button className='px-5 py-2.5 bg-[#3D8361] text-white rounded-lg'>Download App</button>
                            </div>
                            <div className="app__usage__info w-6/12 flex py-10">
                                <div className="mr-6">
                                    <p className='downloads text-center'>1k+</p>
                                    <p className='text-gray-600 font-light'>Downloads</p>
                                </div>
                                <div className="vr my-2 w-0.5 border"></div>
                                <div className="ml-6">
                                    <p className='downloads text-center'>3+</p>
                                    <p className='text-gray-600 font-light'>Rated for 3+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__right">
                        <div className="hero__image">
                            <img className='w-10/12 ml-auto' src={heroImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;