import React from 'react';
import appPreviewBg from '../../assets/petuk-ji-app.png'
import icon01 from '../../assets/app__preview__icon__01.png'
import icon02 from '../../assets/app__preview__icon__02.png'
import icon03 from '../../assets/app__preview__icon__03.png'

const AppPreview = () => {
    return (
        <div className='app__preview__main'>
            <div className="container mx-auto max-w-screen-xl py-36">
                <div className="grid grid-cols-2 gap-4">
                    <div className="app__preview__image">
                        <img className='w-3/5 mx-auto' src={appPreviewBg} alt="" />
                    </div>
                    <div className="app__preview__detail">
                        <h2 className='text-5xl font-semibold mb-2 text-[#262524]'>The Innovative App For Food Delivery</h2>
                        <p className='text-[#5F6575] mt-5'>Eget arcu dictum varius duis. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nunc id cursus metus aliquam. Ipsum dolor sit amet consectetur.</p>

                        <div className="app__preview__detail flex gap-4 items-center my-6">
                            <div className="preview__icon rounded-[20px] p-10 bg-[#F6F3FF]">
                                <img className='w-16' src={icon01} alt="" />
                            </div>
                            <div className="preview__detail border rounded-[20px] p-5">
                                <p className='text-xl font-semibold mb-2 text-[#071731]'>Fast & Easy to Use</p>
                                <p className='text-[#5F6575]'>Pharetra vel turpis nunc eget lorem dolor sed ipsum. Arcu cursus euismod quis viverra nib</p>
                            </div>
                        </div>
                        <div className="app__preview__detail flex gap-4 items-center my-6">
                            <div className="preview__icon rounded-[20px] p-10 bg-[#EAFFFF]">
                                <img className='w-16' src={icon02} alt="" />
                            </div>
                            <div className="preview__detail border rounded-[20px] p-5">
                                <p className='text-xl font-semibold mb-2 text-[#071731]'>User Friendly</p>
                                <p className='text-[#5F6575]'>Pharetra vel turpis nunc eget lorem dolor sed ipsum. Arcu cursus euismod quis viverra nib</p>
                            </div>
                        </div>
                        <div className="app__preview__detail flex gap-4 items-center my-6">
                            <div className="preview__icon rounded-[20px] p-10 bg-[#FFE9ED]">
                                <img className='w-16' src={icon03} alt="" />
                            </div>
                            <div className="preview__detail border rounded-[20px] p-5">
                                <p className='text-xl font-semibold'>Unique Features</p>
                                <p className='text-[#5F6575]'>Pharetra vel turpis nunc eget lorem dolor sed ipsum. Arcu cursus euismod quis viverra nib</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppPreview;