import React from 'react';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { AiFillStar } from 'react-icons/ai';
import Marquee from 'react-fast-marquee';

const Testimonials = () => {
    const reviewData = [
        {
            "name": "Kathryn Garcia",
            "review": "This is a awesome app",
            "date": "26/10/2022",
            "rating": "4",
            "img": "data:image/jpeg;base64,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"
        },
        {
            "name": "Johnathan Smith",
            "review": "This is a good app",
            "date": "01/10/2022",
            "rating": "4",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSq9HVdUQAmEea6zOycYZj_8Qaw9qlqpWo9FnVJRFZ-LOVdBTp-3vBesY1wGmgAaMYmwE&usqp=CAU"
        },
        {
            "name": "John Curry",
            "review": "This is a nice app",
            "date": "01/07/2022",
            "rating": "5",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYk3mB5rbVYpbRj-mqY2IRfjC7hGgEXSdBw&usqp=CAU"
        },
        {
            "name": "Guy Daniel",
            "review": "Awesome app, 100% Recomended",
            "date": "28/04/2022",
            "rating": "4",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWUtyZ4BlBXgmOjlVdrYo5h8HeGwMNCUQkw8abbkPFfhmQ3IuHb-gPUXB9J-lZCIaufg&usqp=CAU"
        },
        {
            "name": "Pablo French",
            "review": "Awesome app, Best service",
            "date": "23/06/2022",
            "rating": "4",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpwZaQxTYvKnJ285bfUJRzg21eVkCkegUdQ&usqp=CAU"
        },
        {
            "name": "Alexis Welch",
            "review": "Nice Feature, good app",
            "date": "06/09/2022",
            "rating": "4",
            "img": "https://assets.entrepreneur.com/content/3x2/2000/20161214164224-GettyImages-533978993.jpeg"
        },
    ]
    return (
        <div className='testimonials'>
            <div className="mx-auto">
                <h1 className='text-5xl font-bold text-center'>What our client says</h1>
                {/* <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper mt-16"
                > */}
                    <Marquee speed={50} gradient={false} className='mt-12'>
                        {
                            reviewData.map((data, index) =>
                                // <SwiperSlide>

                                <Card key={index} className="w-[360px] mx-3 my-2" >
                                    <CardBody className="text-center">
                                        <img
                                            src={data.img}
                                            alt="img-blur-shadow"
                                            className="w-24 h-24 object-cover mx-auto mb-3.5 rounded-full"
                                        />
                                        <Typography variant="h5" className="mb-2">
                                            {data.name}
                                        </Typography>
                                        <Typography className='text-[#262524]'>
                                            {data.review}
                                        </Typography>
                                    </CardBody>
                                    <CardFooter divider className="flex items-center justify-between py-3">
                                        <Typography variant="small" className="font-semibold  text-[#262524]">{data.date}</Typography>
                                        <Typography variant="small" color="gray" className="flex gap-1 items-center font-semibold text-[#262524]">
                                            {data.rating}
                                            <AiFillStar className='text-[#FCE700]' />
                                        </Typography>
                                    </CardFooter>
                                </Card>

                                // </SwiperSlide>
                            )
                        }
                    </Marquee>
                {/* </Swiper> */}
            </div>
        </div>
    );
};

export default Testimonials;