import React from 'react';
import banner from "../../../assets/images/carousel.png"



const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className='w-full h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8' 
        style={{backgroundImage : `url(${banner})`}}
        >
            <div className='flex flex-col md:flex-row items-center max-w-6xl h-[650px] px-8 justify-between '>
                {/* Left Content */}
                <div className='w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
                    <h1 className='text-center md:text-left text-3xl md:text-5xl font-bold text-gray-900'>{title}</h1>
                    <p className='my-4 text-gray-600'>{subtitle}</p>
                    <button className='btn btn-neutral px-6 py-3 rounded-full shadow-md'>SHOP PRODUCT</button>
                </div>

                {/* Right Image */}
                <div className=' w-full md:w-1/2 flex justify-center'>
                    <img className='max-w-md drop-shadow-lg ' src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default CarouselSlide;

