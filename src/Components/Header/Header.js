import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import { FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import './Header.css'


const Header = () => {

    const menu = <>
        <li><Link className='menu_link hover:bg-white font-bold' to='/'>Apply Now</Link></li>
        <li><Link className='menu_link hover:bg-white font-bold' to='/'>Merch</Link></li>
        <li><Link className='menu_link hover:bg-white font-bold' to='/'>Contact Us</Link></li>
    </>

    const submenu = <>
        <li className='list-none relative'><Link className='menu_link inline-block hover:bg-white font-bold text-md lg:text-sm' to='/'>Press</Link></li>
        <li className='list-none relative'><Link className='menu_link inline-block hover:bg-white font-bold text-md lg:text-sm' to='/'>Blog</Link></li>
        <li className='list-none relative'><Link className='menu_link inline-block hover:bg-white font-bold text-md lg:text-sm' to='/'>Podcast</Link></li>
        <li className='list-none relative'><Link className='menu_link inline-block hover:bg-white font-bold text-md lg:text-sm' to='/'>Events</Link></li>
        <li className='list-none relative'><Link className='menu_link inline-block hover:bg-white font-bold text-md lg:text-sm' to='/'>Videos</Link></li>
    </>
    return (
        <div className='absolute transition duration-150 ease-out hover:ease-in top-0 z-50 hover:bg-white hover:text-black text-white w-full header_section '>
            <div className='md:w-[90%] mx-auto'>
                <div className='lg:flex items-center justify-end gap-6 pt-3 hidden font-worksans'>
                    <div className='flex items-center justify-end gap-8 social_menu'>
                        <FaLinkedinIn className='hover:scale-110 text-xl cursor-pointer'></FaLinkedinIn>
                        <FaTwitter className='hover:scale-110 text-xl cursor-pointer'></FaTwitter>
                        <FaYoutube className='hover:scale-110 text-xl cursor-pointer'></FaYoutube>
                        <GrInstagram className='hover:scale-110 text-xl cursor-pointer'></GrInstagram>
                        <ImFacebook className='hover:scale-110 text-xl cursor-pointer'></ImFacebook>
                        <div className='w-[2px] h-[25px] rounded-lg bg-secondary'></div>
                    </div>
                    {submenu}
                </div>
                <div class="navbar">

                    <div class="navbar-start">
                        <div class="dropdown text-dark z-50">

                            <label tabindex="0" class="btn btn-ghost lg:hidden bg-secondary btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 z-50 bg-white">
                                {menu}
                                <div className='font-bold'>
                                    {submenu}
                                </div>
                            </ul>
                        </div>

                        <Link to="/" className="btn btn-ghost normal-case text-xl relative bottom-2 md:bot hover:bg-white"><img src="https://i.ibb.co/mSgWw2p/girl-power-logo-1-removebg-preview-1.png" width="100px" alt="logo" className='relative bottom-4 ' /> <span className='relative mb-10 mr- inline-block font-bold font-worksans'><span className='text-accent'><span className='text-2xl md:text-3xl'>G</span>irl</span> <span className='text-secondary'><span className='text-2xl md:text-3xl'>P</span>ower <span className='text-2xl md:text-3xl'>T</span>alk</span></span></Link>

                    </div>

                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0m md:mt-4 lg:ml-28">
                            {menu}
                        </ul>
                    </div>

                    <div class="navbar-end">
                        <BsSearch className='text-2xl mt-3 hover:scale-110'></BsSearch>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Header;