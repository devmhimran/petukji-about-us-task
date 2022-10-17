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

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="container mx-auto max-w-screen-xl">
                <h1 className='text-5xl font-bold text-center'>What our client says</h1>
                <Swiper
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
                >
                    <SwiperSlide>
                        <Card className="w-[360px]">
                            <CardBody className="text-center">
                            <img
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                    alt="img-blur-shadow"
                                    className="w-24 mx-auto mb-3.5 rounded-full"
                                />
                                <Typography variant="h5" className="mb-2">
                                    Cozy 5 Stars Apartment
                                </Typography>
                                <Typography>
                                    The place is close to Barceloneta Beach and bus stop just 2 min by
                                    walk and near to "Naviglio" where you can enjoy the main night life in
                                    Barcelona.
                                </Typography>
                            </CardBody>
                            <CardFooter divider className="flex items-center justify-between py-3">
                                <Typography variant="small">$899/night</Typography>
                                <Typography variant="small" color="gray" className="flex gap-1">
                                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                    Barcelona, Spain
                                </Typography>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="w-96">
                            <CardHeader color="blue" className="relative h-56">
                                <img
                                    src="/img/blog.jpg"
                                    alt="img-blur-shadow"
                                    className="h-full w-full"
                                />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h5" className="mb-2">
                                    Cozy 5 Stars Apartment
                                </Typography>
                                <Typography>
                                    The place is close to Barceloneta Beach and bus stop just 2 min by
                                    walk and near to "Naviglio" where you can enjoy the main night life in
                                    Barcelona.
                                </Typography>
                            </CardBody>
                            <CardFooter divider className="flex items-center justify-between py-3">
                                <Typography variant="small">$899/night</Typography>
                                <Typography variant="small" color="gray" className="flex gap-1">
                                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                    Barcelona, Spain
                                </Typography>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;