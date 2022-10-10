import React from 'react';
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { CgArrowLongDown } from 'react-icons/cg'
import "./Leader.css"

const leaderData = [
    { id: 1, name: "Sameer Somal", designation: "Co-Founder", place: "Bengaluru, Karnataka, India ", picture: "https://i.ibb.co/H7qcg89/Sameer-Somal-3-1.png" },
    { id: 2, name: "Aashna Duggal", designation: "Associate Director, Legal & Research", place: "Bengaluru, Karnataka, India ", picture: "https://i.ibb.co/W6D1Hb4/Aashna-Duggal-1-1.png" },
    { id: 3, name: "Yash Dhiman", designation: "Sr. Wordpress Developer, Technology", place: "Bengaluru, Karnataka, India ", picture: "https://i.ibb.co/Lg4Qg1t/yash-dhiman-2-1.png" },
    { id: 4, name: "Upashana Khargharia", designation: "Wordpress Developer, Technology", place: "Bengaluru, Karnataka, India ", picture: "https://i.ibb.co/PW0nHMj/Frame-7-1.png" },
    { id: 5, name: "Khushboo Mishra", designation: "Sr. Analyst, Digital Branding & Strategy", place: "Bengaluru, Karnataka, India ", picture: "https://i.ibb.co/ZGy2dNP/Khushboo-Girl-Power-Talk-1.png" },

]
leaderData.map(leader => console.log(leader.picture))
const Leaders = () => {
    return (
        <div className='md:mt-48 mt-24 w-[85%] mx-auto mb-16'>
            <div className='w-[90px] mx-auto md:w-[110px] h-[5px] bg-gradient-to-r from-secondary to-transaprent mb-4'></div>
            <h2 className='text-3xl text-center font-bold'>Meet Our Leaders</h2>
            <p className='text-slate-500 mb-10 mt-1 text-center'>A good leader make the organisations better</p>
            <div className='flex flex-col md:flex-row flex-wrap ,mt-12 md:mt-20'>
                {
                    leaderData.map(leader =>
                        <div key={leader.key} className="card  w-96  mx-auto
                         bg-base-100 shadow-xl border mt-4 md:mt-0 card_large lg:shadow-none lg:rounded-none lg:border-0">
                            <div className='image lg:max-w-[200px] '>
                                <figure>
                                    <img className='h-[150px] md:h-[255px]' src={leader.picture} alt="" />
                                </figure>
                            </div>
                            <div className="card-body hover:bg-secondary hover:text-white transition-all duration-200 ease-in lg:w-[230px] lg:relative bottom-36 left-36 bg-white">
                                <h2 className='text-xl font-bold'>{leader.name}</h2>
                                <p className='text-secondary font-semibold'>{leader.designation}</p>
                                <p>{leader.place}</p>
                                <div className='flex items-center justify-start gap-4'>
                                    <FaLinkedinIn className='hover:scale-110 cursor-pointer inline-block'></FaLinkedinIn>
                                    <FaTwitter className='hover:scale-110 cursor-pointer inline-block'></FaTwitter>
                                    <FaYoutube className='hover:scale-110 cursor-pointer inline-block'></FaYoutube>
                                    <GrInstagram className='hover:scale-110 cursor-pointer inline-block'></GrInstagram>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            <div className='text-center mt-8 md:mt-0 flex items-center justify-center flex-col'>
                <button className="btn btn-ghost border-b-secondary  w-[200px] hover:bg-white capitalize text-xl">Find Them In Map</button>
                <div className='w-[25px] h-[50px] flex items-center justify-center rounded-3xl'>
                    <CgArrowLongDown className='text-secondary  animate_icon text-2xl' />
                </div>
            </div>
        </div>
    );
};


export default Leaders;