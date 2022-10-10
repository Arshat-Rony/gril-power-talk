import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from 'react-icons/fa'
import "./News.css"

const newsData = [
    { id: 1, picture: "https://i.ibb.co/PZ3xsB8/Muskan-1.pnghttps://i.ibb.co/PZ3xsB8/Muskan-1.png", title: "Why gender equity matter in a successfull business ?", date: "Aug 19, 2022" },
    { id: 2, picture: "https://i.ibb.co/tYqWRLT/meet-our-team-2-2-1.jpg", title: "Common mistakes that you should avoid", date: "Aug 19, 2022" },
    { id: 3, picture: "https://i.ibb.co/GCPLH1X/f1-corousel-1.jpg", title: "5 Stereotypes every small town girl can relate to", date: "Aug 22, 2022" },
    { id: 4, picture: "https://i.ibb.co/FVPsbqT/Lifes-Plot-Twists-and-New-Beginning-Reggie-Sison-Girl-Power-Talk-People-We-Admire-1024x384-1.png", title: "Life plot twitst and new beginning", date: "Sep 23, 2022" },
    { id: 5, picture: "https://i.ibb.co/zmBbQrK/I-Work-on-the-Back-End-but-Shine-on-the-Front-End-Girl-Power-Talk-1.jpg", title: "Nutrition individual matters in Girl Power Talk", date: "Oct 19, 2022" },
    { id: 6, picture: "https://i.ibb.co/6m3D7y4/Common-Mistakes-in-Adulting-That-You-Should-Avoid-1.jpg", title: "How to consult a girl", date: "Nov 19, 2022" },
    { id: 7, picture: "https://i.ibb.co/bgJxv1S/deena-with-book-1.png", title: "What a women leader can do than a man leader ", date: "Aug 10, 2022" },
    { id: 8, picture: "https://i.ibb.co/VVFkcK1/Gender-Equity-and-Diversity-Girl-Power-Talk-1-1.jpg", title: "Special care for girls in Girl Power Talk", date: "Dec 19, 2022" },
]



const News = () => {
    return (
        <div className='bg-gradient-to-r from-[#232645] to-pink-500 mt-24 md:mt-36'>
            <div className='w-[90%] mx-auto  py-12'>
                <div className='px-8'>
                    <h2 className='text-3xl font-bold font-worksans mb-2 text-white'>Latest Reads</h2>
                    <p className='text-gray-300'>Our platform is a medium for voicing the opinions and concerns of our society. We are committed to sharing the voices of all individuals, especially youth and women. We amplify the stories of our societies' unsung (s)heroes through our #PeopleWeAdmire series and share our collective experiences through the pieces we author with our diverse collaborators.</p>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-5 my-8 '>
                        <img className='md:w-[50%] h-[350px] rounded-md' src="https://i.ibb.co/tYqWRLT/meet-our-team-2-2-1.jpg" alt="" />
                        <div className='md:w-[50%] space-y-5'>
                            <h2 className='text-xl font-bold text-white'>
                                Why Gender Equity and Diversity Matter for a Successful Business</h2>
                            <p className='text-gray-300'>Why Is There a Need for Change? Why Are Diverse and Inclusive Teams Still a Rarity? How Can Workplaces Foster Inclusivity? Overview: According to studies, businesses hoping to keep growing need to</p>
                            <div className='text-end'>
                                <button className="btn-ghost btn capitalize text-xl hover:translate-x-1 text-white border-2 border-l-white hover:btn-secondary rounded-none">See More<FaLongArrowAltRight className='text-3xl pl-2 pt-1 ' /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "25px",
                }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={10}
                    // slidesPerView={3}
                    navigation
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
                        875: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },
                    }}
                >
                    {
                        newsData.map(news =>
                            <SwiperSlide>
                                <div key={news.id} className="card w-96 bg-base-100 image-full min-h-[400px] mx-auto">
                                    <figure ><img src={news.picture} alt="blog pic" /></figure>
                                    <div className="card-body">
                                        <div className='absolute bottom-11'>
                                            <p className='text-xl font-poppins'>{news.title}</p>

                                            <h2 className="card-title text-2xl">{news.date}</h2>
                                            <div className='justify-end card-actions text-secondary mt-4'>
                                                <button className="btn-ghost btn capitalize text-xl hover:translate-x-1 text-white">See More<FaLongArrowAltRight className='text-3xl pl-2 pt-1' /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default News;