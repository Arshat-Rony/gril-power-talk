import React from 'react';
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { ImFacebook } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='home_footer'>
            <div className='md:w-[85%] mx-auto '>
                <footer className="footer pb-10 pt-20 px-10 md:px-0 text-white">
                    <div className='space-y-4'>
                        <Link to="/" class="btn btn-ghost normal-case text-xl relative bottom-2 md:bot"><img src="https://i.ibb.co/mSgWw2p/girl-power-logo-1-removebg-preview-1.png" width="100px" alt="logo" className='relative bottom-4' /> <span className='relative mb-10 mr- inline-block font-bold font-worksans'><span className='text-accent'><span className='text-2xl md:text-3xl'>G</span>irl</span> <span className='text-secondary'><span className='text-2xl md:text-3xl'>P</span>ower <span className='text-2xl md:text-3xl'>T</span>alk</span></span></Link>
                        <p>One girl empowers another. Let’s change lives together: one girl, <br /> one woman and one human being at a time</p>

                        <p>Phone: +91 7973931882</p>
                        <p>Email : info@girlpowertalk.com</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to="/" className="link link-hover text-md">Branding</Link>
                        <Link to="/" className="link link-hover text-md">Design</Link>
                        <Link to="/" className="link link-hover text-md">Marketing</Link>
                        <Link to="/" className="link link-hover text-md">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to="/" className="link link-hover text-md">About us</Link>
                        <Link to="/" className="link link-hover text-md">Contact</Link>
                        <Link to="/" className="link link-hover text-md">Jobs</Link>
                        <Link to="/" className="link link-hover text-md">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to="/" className="link link-hover text-md">Terms of use</Link>
                        <Link to="/" className="link link-hover text-md">Privacy policy</Link>
                        <Link to="/" className="link link-hover text-md">Cookie policy</Link>
                    </div>
                </footer>
                <hr />
                <div className='flex items-center md:items-start justify-between flex-col md:flex-row'>
                    <div className='mt-12'>

                        <div className='flex items-center justify-center md:justify-around md:items-start gap-8 social_menu text-white'>

                            <FaLinkedinIn className='hover:scale-110 text-xl cursor-pointer hover:text-secondary inline-block'></FaLinkedinIn>
                            <FaTwitter className='hover:scale-110 text-xl cursor-pointer hover:text-secondary inline-block'></FaTwitter>
                            <FaYoutube className='hover:scale-110 text-xl cursor-pointer hover:text-secondary inline-block'></FaYoutube>
                            <GrInstagram className='hover:scale-110 text-xl cursor-pointer hover:text-secondary inline-block'></GrInstagram>
                            <ImFacebook className='hover:scale-110 text-xl cursor-pointer hover:text-secondary inline-block'></ImFacebook>
                            <div className='w-[2px] h-[25px] rounded-lg bg-secondary'></div>
                        </div>
                        <p className='text-sm text-center mt-3 text-secondary'>All Rights Reserved by Girl Power Talk {'\u00a9'}</p>
                    </div>

                    <div className='flex flex-col justify-center items-center my-8 space-y-3'>
                        <button className="btn btn-secondary rounded-none capitalize text-xl inline-block w-[200px]">Apply Now</button>
                        <button className="btn hover:btn-secondary rounded-none capitalize text-xl inline-block w-[200px] btn-ghost border-secondary text-white">Contact Us</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;