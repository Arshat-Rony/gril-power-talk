import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa'







const Share = () => {
    return (
        <div className='w-[95%] md:w-[85%] mx-auto mt-24 flex flex-col md:flex-row gap-4 justify-between md:items-center'>
            <div className='lg:w-[50%] md:w-full'>
                <h2 className='font-bold text-2xl mt-4'>Share Your Story With Us</h2>
                <p className='text-xl mb-6 mt-4'>Do you have a personal or professional story that can inspire other people? We are interested in your journey and recognize that your struggles and successes define you. Amplifying your voice is at the core of the Girl Power Talk movement. We are all ears. Please take the pen and tell us your story. Together, we will empower the next generation of leaders.</p>
                <button className="btn btn-ghost border-2 border-l-secondary rounded-none hover:btn-secondary mt-14 inline-block transition duration-200 ease-in">Share Your Story <FaLongArrowAltRight className='inline-block mb-1 text-2xl' /> </button>
            </div>
            <div className='w-[50%] hidden lg:block'>
                <div className='flex md:space-x-2 md:space-y-2 flex-col md:flex-row justify-end'>


                    <div className="overflow-hidden">
                        <img className='w-[300px] h-[200px] lg:hover:scale-110 lg:hover:rotate-2 transition duration-150 ease-out lg:hover:ease-in md:rounded-xl' src="https://i.ibb.co/ZMpPjL1/Lifes-Plot-Twists-and-New-Beginning-Reggie-Sison-Girl-Power-Talk-People-We-Admire-1024x384-2-1.png" alt="" />
                    </div>

                    <div className="overflow-hidden">
                        <img className='w-[300px] h-[200px] lg:hover:scale-110 lg:hover:rotate-2 transition duration-150 ease-out lg:hover:ease-in md:rounded-xl' src="https://i.ibb.co/SNVw1rp/Patrick-Mataix-Girl-Power-Talk-People-We-Admire-t-1024x384-1.jpg" alt="" />
                    </div>

                </div>
                <div className='flex md:space-x-2 md:space-y-2 flex-col md:flex-row justify-end'>
                    <div className="overflow-hidden">
                        <img className='w-[300px] h-[200px] lg:hover:scale-110 lg:hover:rotate-2 transition duration-150 ease-out lg:hover:ease-in md:rounded-xl' src=" https://i.ibb.co/nb54gND/Girl-Power-Talk-Sindhu-Rajasekaran-People-We-Admire-1024x384-1.jpg" alt="" />
                    </div>
                    <div className="overflow-hidden">
                        <img className='w-[300px] h-[200px] lg:hover:scale-110 lg:hover:rotate-2 transition duration-150 ease-out lg:hover:ease-in md:rounded-xl' src="https://i.ibb.co/QbJDXr6/Manpriya-Navneet-Girl-Power-Talk-People-We-Admire-tn-1024x384-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;