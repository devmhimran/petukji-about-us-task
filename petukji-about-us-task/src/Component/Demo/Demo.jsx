import React from 'react';

const Demo = () => {

    return (
        <div className='demo__main'>
            <div className="container mx-auto max-w-screen-xl py-36">
                <h1 className='text-center text-5xl font-bold'>Watch Our Demo</h1>
                <p className='w-7/12 mx-auto my-6 text-[#5F6575] text-center'>We have 3 version of design on or app consumer view, restaurant view & pick up view. So, you don't need to hire any other designers to make your app.</p>

                <div className="video__preview"  data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <iframe className='rounded-[30px]' width="100%" height="650" src="https://www.youtube.com/embed/0HDqsGyz9d4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Demo;