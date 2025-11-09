import React from 'react';
import image from "../../../assets/images/banner-2.jpg"
import DiscountTime from './DiscountTime';
import { Link } from "react-router";



const DiscountSection = () => {
    return (
        <section className='w-full h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8 bg-gray-200'
        style={{backgroundImage : `url(${image})`}}
        >
            <div className='flex md:flex-row items-center max-w-6xl h-[650px] px-8 justify-between'>
                {/* Left Content */}
                <div className='w-full text-center '>
                    <p className='my-4 text-3xl md:text-5xl font-bold  text-yellow-200'>10% off</p>
                    <h1 className='text-center ml-10 md-ml-0 text-5xl md:text-7xl font-bold w-50 md:w-100 mb-5 text-yellow-200'>New year sale</h1>
                    {/* Counter */}
                    <DiscountTime />
                   <Link href="/shop">
                         <a className='btn btn-neutral px-6 py-3 rounded-full ml-4 md:ml-0 hadow-md'>SHOP SALE</a>
                   </Link>
                </div>

                {/* Right Image */}
                {/* <div className=' w-full flex justify-center'>
                    <img className='max-w-full drop-shadow-lg ' src={image} alt="" />
                </div> */}
            </div>
        </section>
    );
};

export default DiscountSection;

