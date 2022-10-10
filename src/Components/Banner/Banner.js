import React from 'react';
import { FaChevronRight } from 'react-icons/fa'
import "./Banner.css"

const Banner = () => {

    return (
        <div className='banner'>
            <img src="https://i.ibb.co/MPJ1dbf/NCCWSL-audience-front-row-full-size-1800x600-acf-cropped-1.jpg" className="h-[85vh] md:h-[90vh] " alt="Banner" />

            <div className='flex items-start lg:items-center lg:justify-between w-[85%] mx-auto flex-col lg:flex-row z-40 absolute top-28 md:left-16 left-8 lg:top-64 text-white  md: lg:left-28'>
                <div className='space-y-3 '>

                    <div className='w-[90px] md:w-[110px] h-[5px] bg-gradient-to-r from-teal-500 to-transaprent '></div>

                    <p>GET EMPOWERED</p>
                    <span className='relative mb-10 mr- inline-block font-bold font-worksans text-3xl'><span className='text-accent'><span className='text-4xl md:text-5xl '>G</span>irl</span> <span className='text-secondary'><span className='text-4xl md:text-5xl'>P</span>ower <span className='text-4xl md:text-5xl'>T</span>alk</span></span>
                    <p className='font-poppins lg:w-[70%] w-[90%] text-gray-200'>The technology sector is a male-dominated space, but we believe it doesn’t have to be. At Girl Power Talk, we deliberately have a feminist bias for one reason: Although talent is distributed equally across tech, opportunity is not.</p>
                </div>
                <div className='mt-10 lg:mt-0 min-w-[40%]'>
                    <li className='list-none font-bold  cursor-pointer  flex items-center gap-1'><FaChevronRight className='text-accent transition ease-in-out delay-150 text-xl  hover:translate-x-1 hover:text-secondary' /> Our Values</li>
                    <li className='list-none font-bold  cursor-pointer  flex items-center gap-1 mt-4'><FaChevronRight className='text-accent transition ease-in-out delay-150 text-xl hover:translate-x-1 hover:text-secondary' /> Our Leaders</li>
                    <li className='list-none font-bold  cursor-pointer  flex items-center gap-1 mt-4 bg-secondary'><FaChevronRight className='text-accent transition ease-in-out delay-150 text-xl hover:translate-x-1 hover:text-secondary' /> Join Us</li>

                </div>
            </div>
        </div>
    );
};

export default Banner;