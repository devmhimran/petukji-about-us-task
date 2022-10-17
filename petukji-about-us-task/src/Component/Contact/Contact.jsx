import { Input, Textarea } from '@material-tailwind/react';
import React from 'react';

const Contact = () => {
    return (
        <div className='contact__main'>
            <div className="container mx-auto max-w-screen-xl py-20">
                <h1 className='text-5xl font-bold text-center'>Contact</h1>
                <div className="card border border-gray-200 rounded-[20px] mt-12 p-6" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <div className="card-body">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="google__map">
                                <iframe className='w-full rounded-[15px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13961.972396038982!2d77.6414242!3d28.9727558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4ceeb13ddeb49d1!2sPetuk%20Ji%20Private%20Limited!5e0!3m2!1sen!2sbd!4v1666037794824!5m2!1sen!2sbd" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="contact__form">
                                <h2 className='text-2xl text-[#262524] font-semibold mb-6'>Write us a message</h2>
                                <form>
                                    <div className='form__input mb-6'>
                                        <Input color="teal" label="Enter Name" required />
                                    </div>
                                    <div className='form__input mb-6'>
                                        <Input type={'email'} color="teal" label="Enter Email" required />
                                    </div>
                                    <div className='form__input mb-6'>
                                        <Textarea className='h-40' color="teal" label="Message" />
                                    </div>
                                    <div className='form__input mb-6'>
                                        <button type='submit' className='px-5 py-2.5 bg-[#3D8361] text-white rounded-lg'>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;