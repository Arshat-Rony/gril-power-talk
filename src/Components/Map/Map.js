import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { ImLocation2 } from "react-icons/im"


const data =
    [
        {
            id: "6343f26c3a8e6a5f1e1a9860",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Rachita Sharma"
        },
        {
            id: "6343f26c0c58e6790baa1a2a",
            place: {
                lat: -17.825167,
                lng: 31.033510
            },
            name: "Chipiwa Mukono"
        },
        {
            id: "6343f26c47ad620c15d78130",
            place: {
                lat: 40.712776,
                lng: -74.005974
            },
            name: "Sameer Somal"
        },
        {
            id: "6343f26c76978fa164b66b33",
            place: {
                lat: 39.518520,
                lng: -104.762772
            },
            name: "Catherine Traffis"
        },
        {
            id: "6343f26cdd45d69dc79007f4",
            place: {
                lat: 30.733315,
                lng: 76.779419
            },
            name: "Sudhansu Batra"
        },
        {
            id: "6343f26c080ceb59f67ec075",
            place: {
                lat: 12.9767936,
                lng: 77.590082
            },
            name: "Noorain Saleem"
        },
        {
            id: "6343f26c75124fa6b0e9d2b5",
            place: {
                lat: 28.6517178,
                lng: 77.2219388
            },
            name: "Aashna Duggal"
        },
        {
            id: "6343f26cba1554993faf33df",
            place: {
                lat: 14.6509905,
                lng: 121.0486155
            },
            name: "Francesca Kapunan"
        },
        {
            id: "6343f26cd972fbabcb52e17e",
            place: {
                lat: -7.9771206,
                lng: 112.6340291
            },
            name: "Luna Kania A"
        },
        {
            id: "6343f26c0d0cda8b8eb92276",
            place: {
                lat: 30.7041168,
                lng: 76.7176885
            },
            name: "Sushmit Biswas"
        },
        {
            id: "6343f26c03a2dc295509559c",
            place: {
                lat: 30.9090157,
                lng: 75.851601
            },
            name: "Karan Jain"
        },
        {
            id: "6343f26cd3efe151b29950bf",
            place: {
                lat: 33.5618345,
                lng: 35.3780338
            },
            name: "Mostapha Khalifeh"
        },
        {
            id: "6343f26c5b65f14e3d28f486",
            place: {
                lat: -1.2970572,
                lng: 36.8022582
            },
            name: "Marion Nekesa"
        },
        {
            id: "6343f26c77e289d5af8b4c76",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Simran Singh"
        },
        {
            id: "6343f26c1b4b9d56b88e3b56",
            place: {
                lat: -0.2201641,
                lng: -78.5123274
            },
            name: "Victoria César Velázquez"
        },
        {
            id: "6343f26cec20a65807bc7c59",
            place: {
                lat: 43.3600536,
                lng: -80.3123023
            },
            name: "Frankie Picasso"
        },
        {
            id: "6343f26c3fdab991554dde87",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Tina Chawla"
        },
        {
            id: "6343f26c479783bb7e19238a",
            place: {
                lat: 28.6138954,
                lng: 77.2090057
            },
            name: "sonam s."
        },
        {
            id: "6343f26cea3f1dcad3bbe5f2",
            place: {
                lat: 30.7334421,
                lng: 76.7797143
            },
            name: "Dhanparkash (Yash) Dhiman"
        },
        {
            id: "6343f26c54751ac370116b7d",
            place: {
                lat: 26.1805978,
                lng: 91.753943
            },
            name: "Upashana Khargharia"
        },
        {
            id: "6343f26c37341bc38266d0e5",
            place: {
                lat: 30.7334421,
                lng: 76.7797143
            },
            name: "Nitya Bardhan"
        },
        {
            id: "6343f26cbfb228e28a452c94",
            place: {
                lat: 30.7298439,
                lng: 76.7841457
            },
            name: "Devanshi Arora"
        },
        {
            id: "6343f26c86ea54873fe86aa5",
            place: {
                lat: 19.0785451,
                lng: 72.878176
            },
            name: "Khushboo Mishra"
        },
        {
            id: "6343f26c0d8b8d4ee6f209ab",
            place: {
                lat: 28.4851694,
                lng: 77.1963652
            },
            name: "Deena Shakeel Khan"
        },
        {
            id: "6343f26cf1656e915983d9a1",
            place: {
                lat: 19.0785451,
                lng: 72.878176
            },
            name: "Neel Patki"
        },
        {
            id: "6343f26c39fb667059586ccb",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Nitya Gupta"
        },
        {
            id: "6343f26cea0eb59a1049745e",
            place: {
                lat: 6.8476691,
                lng: 79.9257584
            },
            name: "Fathima Azma"
        },
        {
            id: "6343f26ca962707b8657b1c6",
            place: {
                lat: 18.521428,
                lng: 73.8544541
            },
            name: "Mahesh Sathe"
        },
        {
            id: "6343f26c121ac29c42de4f07",
            place: {
                lat: 25.2208117,
                lng: 86.5172037
            },
            name: "Aniket Raj"
        },
        {
            id: "6343f26c8b29a6a72ee6fd53",
            place: {
                lat: 30.7334421,
                lng: 76.7797143
            },
            name: "Rahul Sharma"
        },
        {
            id: "6343f26c71484b71aa9463b5",
            place: {
                lat: 25.04776,
                lng: 121.53185
            },
            name: "Stevens Forcadell"
        },
        {
            id: "6343f26c0825c722c13e876f",
            place: {
                lat: 18.521428,
                lng: 73.8544541
            },
            name: "Prakash Dubey"
        },
        {
            id: "6343f26cccd2dbd302a2bc81",
            place: {
                lat: 25.4381302,
                lng: 81.8338005
            },
            name: "Aashna Kushwaha"
        },
        {
            id: "6343f26c75f628685153ed9f",
            place: {
                lat: 15.9266657,
                lng: 107.9650855
            },
            name: "Chi N."
        },
        {
            id: "6343f26ccf0305c76e8ed85d",
            place: {
                lat: 27.2681601,
                lng: 95.3895606
            },
            name: "Muskan Purohit"
        },
        {
            id: "6343f26c8f7b2c8e746d4241",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Dr. Vishal Kumar Nagar"
        },
        {
            id: "6343f26cc58867268619f7ee",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Almas Malik"
        },
        {
            id: "6343f26c1da9606e29e51050",
            place: {
                lat: 14.4290116,
                lng: 120.9365911
            },
            name: "Cate Margaret Paspos"
        },
        {
            id: "6343f26cd3d78cc83badf640",
            place: {
                lat: 30.7041168,
                lng: 76.7176885
            },
            name: "Ganga Chhetri"
        },
        {
            id: "6343f26c7adfe62936b16e06",
            place: {
                lat: 30.7041168,
                lng: 76.7176885
            },
            name: "Kuldeep Pant"
        },
        {
            id: "6343f26cbdd77e7dbd84d012",
            place: {
                lat: 1.503555,
                lng: 103.7495586
            },
            name: "Nishanti (Nisha) SW"
        },
        {
            id: "6343f26c20ceb5bbb14c4788",
            place: {
                lat: 1.4419683,
                lng: 38.4313975
            },
            name: "Happiness Chausiku"
        },
        {
            id: "6343f26c2dd75d55379d3127",
            place: {
                lat: 1.4419683,
                lng: 38.4313975
            },
            name: "Norah Brenda Oriwo"
        },
        {
            id: "6343f26c810acbfbe1d886a2",
            place: {
                lat: 6.498507976531982,
                lng: 3.3532750606536865
            },
            name: "Racheal Bankole"
        },
        {
            id: "6343f26cdd2b79a665dd4b5f",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Rimsha Wasiq"
        },
        {
            id: "6343f26c92e58ed6c717cfd2",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Sadia Shaikh"
        },
        {
            id: "6343f26c0ea67b691868de89",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Tuba Malik"
        },
        {
            id: "6343f26c7abc45ecd43c9d23",
            place: {
                lat: 20.9917578,
                lng: 105.7967994
            },
            name: "Thuy Van (Zaan Do) Do"
        },
        {
            id: "6343f26ccc0ad5171d3a79c2",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Nilakshi Chaubey"
        },
        {
            id: "6343f26cc6389519f86ab6a2",
            place: {
                lat: -2.4833826,
                lng: 117.8902853
            },
            name: "Afifah Nurhilmiyah"
        },
        {
            id: "6343f26cd6c4c78c31552de0",
            place: {
                lat: 8.022778,
                lng: 124.998611
            },
            name: "Lavern Libertad"
        },
        {
            id: "6343f26c235cc845ed16e763",
            place: {
                lat: 9.2471392,
                lng: 125.8539592
            },
            name: "Anjo A. "
        },
        {
            id: "6343f26c07ed573199d5482a",
            place: {
                lat: -6.1875613,
                lng: 106.8277658
            },
            name: "Dinar (Dee) Apriliani"
        },
        {
            id: "6343f26c6983c963f4346f16",
            place: {
                lat: -0.4818132,
                lng: 30.1686851
            },
            name: "Kauthar Wangi"
        },
        {
            id: "6343f26c88a47c74d9bff5a7",
            place: {
                lat: 12.7503486,
                lng: 122.7312101
            },
            name: "Maria Bernadith Osorio"
        },
        {
            id: "6343f26c3fa55af24878eeec",
            place: {
                lat: 19.0785451,
                lng: 72.878176
            },
            name: "Soha Borkar"
        },
        {
            id: "6343f26c4821f3184535e45c",
            place: {
                lat: 30.2090874,
                lng: 76.3398721
            },
            name: "Ananya ."
        },
        {
            id: "6343f26cf4962faafce3d185",
            place: {
                lat: 39.9319192,
                lng: -75.19589
            },
            name: "Dr Jasgun Aulakh"
        },
        {
            id: "6343f26ca7ee510a4ef6e27b",
            place: {
                lat: 44.83141,
                lng: 9.41722
            },
            name: "Pablo A. Ruz Salmones"
        },
        {
            id: "6343f26ce08f49ae204253f0",
            place: {
                lat: 61.0666922,
                lng: -107.991707
            },
            name: "Grace Robertson"
        },
        {
            id: "6343f26cacd1d61b11d99894",
            place: {
                lat: 44.83141,
                lng: 9.41722
            },
            name: "Esteban Lluis Aceff"
        },
        {
            id: "6343f26c200e5f3b0bd2296d",
            place: {
                lat: 14.4804237,
                lng: 120.98087
            },
            name: "Alexa Rhys Pascual"
        },
        {
            id: "6343f26cb0fe8e524070b4e8",
            place: {
                lat: 17.9712148,
                lng: -76.7928128
            },
            name: "Alecia Hall"
        },
        {
            id: "6343f26cd3dc8edcb043f3d7",
            place: {
                lat: 14.2554073,
                lng: 120.8671503
            },
            name: " Ethan Marco Diño"
        },
        {
            id: "6343f26c2d1064dabeeec770",
            place: {
                lat: 18.521428,
                lng: 73.8544541
            },
            name: "Monali Sathe"
        },
        {
            id: "6343f26cf51e1c469027d6d9",
            place: {
                lat: -2.4833826,
                lng: 117.8902853
            },
            name: "Shaheena"
        },
        {
            id: "6343f26c4f16c8ac226197b6",
            place: {
                lat: 6.6983658,
                lng: 125.3612135
            },
            name: "Yani Tabunan"
        },
        {
            id: "6343f26ceff2f0d20ba5a185",
            place: {
                lat: 14.5706996,
                lng: 121.13202
            },
            name: "Reuelle Samaco"
        },
        {
            id: "6343f26ce7673e02b429dc78",
            place: {
                lat: 19.0785451,
                lng: 72.878176
            },
            name: "Anjali Sukumaran"
        },
        {
            id: "6343f26cfcc62478bac6fdd7",
            place: {
                lat: 26.4402119,
                lng: 80.2693051
            },
            name: "SONAKSHI MISRA "
        },
        {
            id: "6343f26c629214d39d55fa59",
            place: {
                lat: 13.0836939,
                lng: 80.270186
            },
            name: "Latika Srinivasan"
        },
        {
            id: "6343f26c6aec6673b5c06848",
            place: {
                lat: 28.6138954,
                lng: 77.2090057
            },
            name: "Mridul Gupta"
        },
        {
            id: "6343f26c3de23840f04a9406",
            place: {
                lat: 7.1190247,
                lng: 79.9159876
            },
            name: "Shamen Landersz"
        },
        {
            id: "6343f26cfea1e2c358d9c9d3",
            place: {
                lat: 30.7041168,
                lng: 76.7176885
            },
            name: "Amandeep singh"
        },
        {
            id: "6343f26c02d77f3db7caa93b",
            place: {
                lat: 10.2447856,
                lng: -61.4561398
            },
            name: "Jobelle Ponta-oy"
        },
        {
            id: "6343f26c83bd988a53b5ec37",
            place: {
                lat: 7.2931208,
                lng: 80.6350358
            },
            name: "Anjalee Welandagama"
        },
        {
            id: "6343f26c5753a80f804140de",
            place: {
                lat: 61.0666922,
                lng: -107.991707
            },
            name: "Angus Robertson"
        },
        {
            id: "6343f26c0fc8598f68d1c233",
            place: {
                lat: 28.6138954,
                lng: 77.2090057
            },
            name: "Gaurav Singh"
        },
        {
            id: "6343f26ccc7d56520eea2e84",
            place: {
                lat: 28.70406,
                lng: 77.102493
            },
            name: "Kenisha Chopra"
        },
        {
            id: "6343f26c980756e382194ef3",
            place: {
                lat: 17.360589,
                lng: 78.4740613
            },
            name: "Ruth Sharon"
        }
    ]

const containerStyle = {
    width: '100%',
    height: '600px'
};

const center = {
    lat: 24.4769288,
    lng: 90.2934413
};


const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    })

    return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
        >

            <>
                {data.map(mapdata => <Marker label={mapdata.name} position={mapdata.place} />)}
            </>
        </GoogleMap>

    ) : <></>

};

export default Map;