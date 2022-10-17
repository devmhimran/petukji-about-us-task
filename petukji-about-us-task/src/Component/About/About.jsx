import React from 'react';
import petukJiAboutUs from '../../assets/petuk-ji-about-us.jpg'

const About = () => {


    return (
        <div className='about__main'>
            <div className="container mx-auto max-w-screen-xl py-20">
                <div className="grid grid-cols-2 gap-12">
                    <div className="about__left">
                        <h1 className='text-5xl font-bold'>Listening to the heart of your tummy</h1>
                        <p className='my-6 text-[#5F6575] leading-normal'>Is your mouth watering so much for street food and can't go there for some reason. Or feeling hungry but don't want to order as most of the time you see something and get something else from food joints due to various factors. Or feeling that offers are not sufficient to order. Don't Worry! Now Petuk Ji is here - Meerut's first and own Food Delivery Marketplace. Petuk Ji is the first and only one food delivery marketplace that is supported by UP Government and awarded by Google among top 100 start-ups in india just because Petuk Ji is committed to connect food lovers with street food hawkers and other food joints to provide local cuisine in local rate with overloaded offers along with displaying original images of seller's location and food so that you get same as you see into the app to order & more</p>
                    </div>
                    <div className="about__right">
                        <img className='w-full h-[420px] object-cover rounded-lg' src={petukJiAboutUs} alt="" data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;