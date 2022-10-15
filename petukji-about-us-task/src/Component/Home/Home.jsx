import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import 'aos/dist/aos.css'
import AOS from 'aos';
import Feature from '../Feature/Feature';

const Home = () => {
    useEffect(()=>{
        AOS.init({
            duration: 2000,

          });
    },[])
    return (
        <div>
            <Hero/>
            <Feature/>
        </div>
    );
};

export default Home;