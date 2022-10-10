import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Reviews.css'

const reviewData = [
    { id: 1, image: "https://i.ibb.co/QKdSDtk/Devanshi-1.png", name: "Nithiya Menon", designation: "Vice President Mike Law, USA", text: "In a time of people searching their corporate souls to see if they are doing everything possible to embrace diversity and be a good global citizen, Girl Power Talk stands out as a beacon of inspiration. Not only does Girl Power Talk provide a place for young women to get experience and have their voices heard, but they also support the LGBT community. If you are seeking to work with a company that can not only meet your SEO needs but helps make the world a better place at the same time, I highly recommend you hire Girl Power Talk. " },
    { id: 2, image: "https://i.ibb.co/mBjCGMV/Rectangle-138-1.png", name: "Ian Ishani", designation: "Consultant,Digital Agency, Cayman Islands ", text: "The ‘Young Leaders’ at Girl Power Talk are storytellers, determined to be the voices of change. It is with this strong penchant for making a positive difference in the world that keeps them motivated to deliver excellent results on projects they take up globally. With innovation and creativity at the core of this organization, the is continuously engaged in acquiring knowledge and creating meaningful connections. This set of ever-growing bright and capable members is jammed packed with unlimited potential. Their unique culture, free of corporate red tape and hierarchies, with a focus on transparency and the well-being of the entire team, makes them worthy of consideration on merit." },
    { id: 4, image: "https://i.ibb.co/b6MF6P1/Aashna-1-1.png", name: "Atashi Apsara", designation: "CEO of Kanio Hospital, India", text: "As board chair for Canada’s Responsible Investment Association, I play an active role in facilitating the integration of Environmental, Social and Governance (ESG) factors into the investment decision making process, and in the encouragement of Impact Investing. Girl Power Talk is a leading example of an impact investment – a company that aims to have a positive ESG outcome while following a robust business plan – in this case the provision of exceptional service as digital marketing experts." },
    { id: 3, image: "https://i.ibb.co/VMzM4dX/Dee-1.png", name: "Nela Mehta", designation: "Story Tellar, United States", text: "My daughter Tina Chawla has been working with Girl Power Talk for almost 2 years, and as her father, seeing first-hand, her professional and personal growth has left me very proud. It is a tremendous opportunity for any individual, mainly due to the exposure to a professional environment coupled with the fact that they choose to have no rigid hierarchy and treat everyone’s opinion equally without considering the ‘age’ or ‘experience’ as a factor. With Tina, her journey has brought about a sharp growth in her self-confidence, to me this has been the most remarkable change." },
]

const Reviews = () => {
    return (
        <div className='mt-24 review_side'>
            <div className='flex items-center justify-center flex-col md:flex-row p-4 w-[95%] md:w-[85%] mx-auto'>
                <div className='md:w-[50%] z-20'>
                    <div className='w-[150px] md:w-[200px] md:h-[6px]  h-[5px] bg-gradient-to-r from-secondary to-transaprent '></div>
                    <h2 className='font-bold text-2xl md:text-4xl font-worksans my-5 text-white'>What People Say About
                        <br />   Girl Power Talk?</h2>
                    <p className='text-gray-300 text-xl'>Girl Power Talk is a voice for those who don't have one. We build bridges by fostering collaboration across communities. When others speak, we listen. Here are a few testimonials from those whose hearts we have touched over the past few years. Their encouragement is our inspiration for tomorrow.</p>
                </div>

                <div className='md:w-[50%] w-[100%] p-4'>
                    <Swiper style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-navigation-size": "25px",
                    }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        autoplay={true}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            1200: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                        }}
                    >
                        {
                            reviewData.map(review =>
                                <SwiperSlide key={review.id}>
                                    <div className='px-16 py-10 space-y-3 mt-10'>
                                        <img src={review.image} className="rounded-2xl w-[150px]" alt="" />
                                        <h2 className='font-bold text-white text-2xl'>{review.name}</h2>
                                        <p className='text-secondary text-xl font-bold'>{review.designation}</p>
                                        <p className='text-gray-300 text-lg'>{review.text}</p>
                                        <button className="btn btn-ghost capitalize border-b-secondary border-2 rounded-none text-white">Connect in Linkedin</button>
                                    </div>
                                </ SwiperSlide >
                            )
                        }
                    </Swiper>

                </div>
            </div >
        </div>
    );
};

export default Reviews;


