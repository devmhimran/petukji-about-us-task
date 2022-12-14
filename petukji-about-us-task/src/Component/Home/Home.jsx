import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import 'aos/dist/aos.css'
import AOS from 'aos';
import Feature from '../Feature/Feature';
import AppPreview from '../AppPreview/AppPreview';
import Demo from '../Demo/Demo';
import AppScreenShot from '../AppScreenShot/AppScreenShot';
import TeamMember from '../TeamMember/TeamMember';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

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
            <AppPreview/>
            <Demo/>
            <AppScreenShot/>
            <About/>
            <Testimonials/>
            <TeamMember/>
            <Contact/>
        </div>
    );
};

export default Home;