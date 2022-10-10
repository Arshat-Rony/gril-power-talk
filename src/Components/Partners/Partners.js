












import React from 'react';


const pictures = [
    { background: "bg-white", picture: "https://i.ibb.co/BVY2XGb/Rectangle-183-1.png" },
    { background: "bg-pink-300", picture: "https://i.ibb.co/4Syt1Rp/865-238cf9206b842c1d13e8eb771a67ef2838a434c3-2-2-1.png" },
    { background: "bg-white", picture: "https://i.ibb.co/TtdMw7W/Rectangle-184-1.png" },
    { background: "bg-pink-300", picture: "https://i.ibb.co/6vN11HJ/Rectangle-196-1.png" },
    { background: "bg-white", picture: "https://i.ibb.co/sPNSzrh/Womens-Economic-Forum-Icon-0-1.png" },
    { background: "bg-pink-300", picture: "https://i.ibb.co/BCWXbRG/2020-Choose-Love-Movement-Logo-FINAL-1.png" },
    { background: "bg-white", picture: "https://i.ibb.co/VvW1PJ3/WITI-Icon-0-1-1.png" },
    { background: "bg-pink-300", picture: "https://i.ibb.co/dQ2b8Cv/EEnable-Logo-0-1.png" },
    { background: "bg-white", picture: "https://i.ibb.co/GJfVmTH/Rectangle-179-1-1.png" },
    { background: "bg-pink-300", picture: "https://i.ibb.co/RNHMt7v/Rectangle-180-1.png" },
    { background: "bg-white", picture: "https://i.ibb.co/M5GYWnR/Rectangle-185-1.png" },
]

const Partners = () => {
    return (
        <div className='mt-24 md:my-44 md:w-[85%] mx-auto'>
            <div className='w-[90px] mx-auto md:w-[110px] h-[5px] bg-gradient-to-r from-secondary to-transaprent '></div>
            <h2 className='font-worksans text-3xl font-bold text-center mt-2'>Our Partners</h2>
            <p className='text-gray-400 text-center mb-10'>Trust Makes Your Partners</p>
            <div className='flex items-center justify-center flex-wrap '>
                {
                    pictures.map((picture, index) => <div key={index} className={`w-[250px] h-[110px] p-3 flex items-center justify-center border hover:border-slate-400  ${picture.background}`}><img className='w-[150px] transition duration-150 ease-out   text-center hover:scale-110 relative ' src={picture.picture} alt="compnay logo"></img></div>)
                }
            </div>
            <div className='text-center mt-8 '>
                <button className="btn btn-ghost border-secondary hover:btn-secondary w-[200px]">Colaborate Us</button>
            </div>
        </div>
    );
};

export default Partners;