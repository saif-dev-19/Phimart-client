import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { IoIosPricetag } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";



const Features = () => {
    const features = [
        {
            icon : <FaShippingFast className='text-cyan-600 text-4xl' />,
            title : "Free Shipping",
            description : "Orders $50 or more.Get Free Shipping.",
        },
        {
            icon : <SlBadge className='text-cyan-600 text-4xl' />,
            title : "Quality guarantee",
            description : "Dolor sit amet orem ipsu mcons ectetur adipi elit.",
        },
        {
            icon : <IoIosPricetag  className='text-cyan-600 text-4xl' />,
            title : "Daily offers",
            description : "when you sign up",
        },
        {
            icon : <IoShieldCheckmark  className='text-cyan-600 text-4xl' />,
            title : "100% secure payment",
            description : "Rem Lopsum dolor sit amet,",
        },
    ]
    return (
        <section className='px-8 py-15'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {features.map((feature,index) => (
                    <div key={index} className='flex flex-col items-center text-center'>
                        {feature.icon}
                        <h3 className='text-lg font-semibold mt-2'>{feature.title}</h3>
                        <p className='text-gray-400 text-sm'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;