import React from 'react';
import { FcRight } from 'react-icons/fc'

const imageData = [
    { id: 1, src: "https://i.ibb.co/s53gLj2/award-1-1.png" },
    { id: 2, src: "https://i.ibb.co/NZ9ghnh/award-2-1.png" },
    { id: 3, src: "https://i.ibb.co/TrM8R0f/award-3-1.png" },
]

const About = () => {
    return (
        <div className='w-[90%] mx-auto md:w-[85%] mt-32 overflow-hidden'>
            <div className='w-[90px] mx-auto md:w-[110px] h-[5px] bg-gradient-to-r from-secondary to-transaprent '></div>
            <h2 className='text-3xl font-bold font-worksans text-center my-4'>About Us</h2>
            <div className='flex items-center justify-center flex-col md:flex-row'>
                <div className='font-poppins space-y-3 md:w-[50%]'>

                    <q className='font-bold inline-block'>Let’s unlock your potential. Welcome to Girl Power Talk. </q>
                    <br /> <span className='font-bold '>----- GPT</span>

                    <p className='text-gray-600 '>We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace. At Girl Power Talk, we are passionately dedicated to empowering women–as well as men and nonbinary individuals–with opportunities to learn confidently, feel valued, and build a career full of purpose.</p>

                    <p className='cursor-pointer border-b-2 border-secondary inline-block hover:translate-x-3 transition ease-in-out delay-150 duration-200 font-bold pt-4'>Explore Us  <FcRight className='text-secondary hover:translate-x-2 inline-block' /> </p>

                    <div className='flex items-center justify-center w-full pt-8'>
                        <div className='w-full mx-auto  h-[5px] bg-gradient-to-r from-secondary to-transaprent '></div>
                        <h2 className='text-3xl font-bold font-worksans text-center'>Awards</h2>
                        <div className='w-full mx-auto  h-[5px] bg-gradient-to-l from-secondary to-transaprent '></div>
                    </div>

                    <div className='flex items-center justify-between pt-4'>
                        {
                            imageData.map(image => <img className='w-[150px]' src={image.src} alt="award_image"></img>)
                        }
                    </div>


                </div>

                <img className='mt-10 md:mt-0 img-fluid hover:scale-105 transition ease-in-out delay-150 duration-200 mx-auto  h-[480px] relative right-8 md:right-0 md:w-[50%]' src="https://i.ibb.co/r3DCf8n/home-about-girl-power-talk-min-1.png" alt="award_pic" />
            </div>

            <div>
                <div className='w-[90px]  md:w-[110px] h-[5px] bg-gradient-to-r from-secondary to-transaprent '></div>
                <h2 className='text-2xl font-bold font-worksans my-4'>Our Mission & Vision</h2>
                <p className='text-gray-600'>Girl Power Talk is passionate about elevating young women to become global leaders who are recognized for their myriad of talents and contributions. We believe that through education, opportunity, and the support of empathetic male allies, girls and women will advance beyond gender roles, aspire to new levels of achievement and reshape our society. Through our innovative ecosystem, we are changing the world of work for the better and providing all voices equal weight in a new narrative defining the future.</p>

                <p className="pl-0 border-b-2 border-secondary hover:btn inline-block hover:btn-secondary hover:pl-3 mb-10 mt-8">See More <FcRight className='inline-block ml-2 text-xl' /></p>
            </div>
        </div>
    );
};

export default About;