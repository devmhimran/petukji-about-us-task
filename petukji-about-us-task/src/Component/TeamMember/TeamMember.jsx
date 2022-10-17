import { IconButton } from '@material-tailwind/react';
import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';

const TeamMember = () => {
    const teamData = [
        {
            "name": "Subhash Rana",
            "img": "https://media-exp1.licdn.com/dms/image/C4D03AQEtxcTcl4ECsg/profile-displayphoto-shrink_200_200/0/1650438859527?e=1671667200&v=beta&t=8dDE-sRWJwdEVCB4SSnvYdg2EwfsFdXEiO3NB1JeiTI",
            "job": "Founder, Petuk Ji",
            "linkedIn": "https://www.linkedin.com/in/subhash-rana/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BMuAlsCB1RIukVj8kbI4rPw%3D%3D"
        },
        {
            "name": "Neha R.",
            "img": "https://media-exp1.licdn.com/dms/image/C4D03AQEAkPfdhTVjEw/profile-displayphoto-shrink_200_200/0/1661973689392?e=1671667200&v=beta&t=U9ymKK1ZtmJ4VvB7fD0NuMXlBc6DZRno4A748SPMxZ8",
            "job": "Talent and Recruitment",
            "linkedIn": "https://www.linkedin.com/in/neha-r-3b57bb61/"
        },
        {
            "name": "Vedanti Madane-Mane",
            "img": "https://media-exp1.licdn.com/dms/image/C5603AQENeZXy05iamg/profile-displayphoto-shrink_200_200/0/1622896003911?e=1671667200&v=beta&t=zTGkNLheSObTkp-LJ__UIHU3Xtd3_Tk2g8r5QTd3ag0",
            "job": "Digital Marketing Executive",
            "linkedIn": "https://www.linkedin.com/in/vedanti-madane-mane-89b88094/"
        },
        {
            "name": "",
            "img": "https://media-exp1.licdn.com/dms/image/C4E03AQFBqfdALkatfA/profile-displayphoto-shrink_200_200/0/1649223038796?e=1671667200&v=beta&t=YAMDQjSGWjISdzxbJnVi9HpjBeaSQVQ-QYOXJi3M_OE",
            "job": "Human Resources Executive",
            "linkedIn": ""
        },
        {
            "name": "Abhishek kumar",
            "img": "https://media-exp1.licdn.com/dms/image/D4D35AQGV4tz4QSrAWw/profile-framedphoto-shrink_200_200/0/1661583053565?e=1666558800&v=beta&t=TlVdKCAzCxPmliRSXch0t9FljHZjeAg1VcCuJBQvlkw",
            "job": "Android Developer",
            "linkedIn": "https://www.linkedin.com/in/abhishek-kumar-o09/"
        },
        {
            "name": "Gayatri Walavalkar",
            "img": "https://media-exp1.licdn.com/dms/image/D4D35AQGH1goed_nlFg/profile-framedphoto-shrink_200_200/0/1665646331957?e=1666558800&v=beta&t=trl_PiA4Ft7FCNTHHV1QkQVsN8BYxKZLKwUMuK7U0NE",
            "job": "Human resources manager",
            "linkedIn": "https://www.linkedin.com/in/gayatri-walavalkar-497267229/"
        },
        {
            "name": "",
            "img": "https://media-exp1.licdn.com/dms/image/C5603AQHPjpk3MO8_Zw/profile-displayphoto-shrink_200_200/0/1640728331442?e=1671667200&v=beta&t=0lY_6O0gFtx0QmGvVjPKY08YGrVZd_NVAxjnDrhv9EQ",
            "job": "Management Trainee",
            "linkedIn": ""
        },
        {
            "name": "Raghav Goyal",
            "img": "https://media-exp1.licdn.com/dms/image/C4E03AQEvtmmKLgKoqw/profile-displayphoto-shrink_200_200/0/1642923632349?e=1671667200&v=beta&t=7vHwL9bPZeegxQeyycgBfnlSrZEa4tpmBe7GzgWzF_A",
            "job": "Student",
            "linkedIn": "https://www.linkedin.com/in/raghav-goyal-bba-geu/"
        },
        {
            "name": "Bhavesh Kumar Jangir",
            "img": "https://media-exp1.licdn.com/dms/image/D4D35AQG6OwCeS7irYw/profile-framedphoto-shrink_200_200/0/1664271510102?e=1666558800&v=beta&t=dBjLXyzKliaxv76cinYccj9-2TUZkKT_Ro1H1S9OY7A",
            "job": "Android developer",
            "linkedIn": "https://www.linkedin.com/in/bhavesh-kumar-jangir-82a506213/"
        },
    ]
    return (
        <div className='team__member__main'>
            <div className="container mx-auto max-w-screen-xl py-20">
                <h1 className='text-5xl font-bold text-center'>Our Team Members</h1>
                <div className="grid grid-cols-4 gap-4 mt-12" >
                    {
                        teamData.map((data, index) => <div key={index} className="team__member__detail">
                            <div className="card border border-gray-200 rounded-lg" data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                <div className="card-body p-3">
                                    <img className='mx-auto w-full rounded-lg' src={data.img} alt="" />
                                    <div className="team__member__info mt-3">
                                        <p className='text-center font-semibold'>{data.name ? data.name : 'Petuk Ji Member'}</p>
                                        <p className='text-center text-[#5F6575]'>{data.job ? data.job : 'Petuk Ji Employee'}</p>
                                        <div className="social__btn text-center mt-2">
                                            <a href={data.linkedIn} target="_blank">
                                                <IconButton>
                                                    <GrLinkedinOption className='text-2xl' />
                                                </IconButton>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamMember;