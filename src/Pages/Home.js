import React from 'react';
import About from '../Components/About';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Leaders from '../Components/Leaders/Leaders';
import Map from '../Components/Map/Map';
import Movement from '../Components/Movement/Movement';
import News from '../Components/News/News';
import Partners from '../Components/Partners/Partners';
import Reviews from '../Components/Review/Reviews';
import Share from '../Components/Share/Share';

const Home = () => {
    return (
        <div className='w-full'>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Share></Share>
            <Movement></Movement>
            <News></News>
            <Partners></Partners>
            <Reviews></Reviews>
            <Leaders></Leaders>
            <Map></Map>
            <Footer></Footer>
        </div>
    );
};

export default Home;