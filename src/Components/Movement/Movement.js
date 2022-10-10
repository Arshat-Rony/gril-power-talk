import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Movement = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 w-[95%] md:w-[85%] mx-auto mt-12'>
            <img className='md:w-[50%] md:h-[400px] rounded-md' src="https://i.ibb.co/1G9KnVt/IMG-7549-1-1-min-1.png" alt="" />
            <div className='md:w-[50%]'>
                <h2 className='text-2xl font-bold mb-3'>Start A New Move</h2>
                <p className='text-gray-600 text-xl'>Girl Power Talk was founded on the idea that young India needs an innovative new work culture that equally harnesses people’s talents, irrespective of their gender. Girl Power Talk is more than a company. We are a movement rooted in empowerment, professional ambition, and social impact. For generations, women have been relegated to secondary roles, and the youth exploited for their energy and inexperience. We are a culture that will make history by changing this dynamic and writing the beautiful next chapter in this story.</p>
                <button className="btn btn-ghost border-2 border-l-secondary rounded-none hover:btn-secondary mt-14 inline-block transition duration-200 ease-in">Share Your Story <FaLongArrowAltRight className='inline-block mb-1 text-2xl' /> </button>
            </div>
        </div>
    );
};

export default Movement;