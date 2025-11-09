import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">PM</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">About PhiMart</h1>
                    <p className="text-xl text-gray-600 mb-4">Your Premier Online Shopping Destination</p>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        PhiMart is a cutting-edge e-commerce platform designed to provide a seamless shopping experience
                        for customers worldwide. We offer a wide range of products with fast delivery, secure payments,
                        and exceptional customer service.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Mission</h3>
                        <p className="text-gray-700">
                            To revolutionize online shopping by providing high-quality products, innovative technology,
                            and unparalleled customer satisfaction. We strive to make shopping accessible, enjoyable,
                            and trustworthy for everyone.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-green-600">Our Vision</h3>
                        <p className="text-gray-700">
                            To become the leading e-commerce platform globally, setting new standards in digital
                            commerce through continuous innovation, sustainability, and community engagement.
                        </p>
                    </div>
                </div>

                {/* Company Story */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-center text-purple-600">Our Story</h3>
                    <p className="text-gray-700 mb-4">
                        Founded in 2020, PhiMart started as a small online marketplace with a vision to simplify
                        the shopping experience. What began as a passion project has grown into a comprehensive
                        e-commerce solution serving thousands of customers daily.
                    </p>
                    <p className="text-gray-700">
                        Our journey has been driven by innovation and customer-centric design. We've continuously
                        evolved our platform, integrating the latest technologies to ensure security, speed, and
                        user-friendliness. Today, PhiMart stands as a testament to what dedicated entrepreneurship
                        and technological excellence can achieve.
                    </p>
                </div>

                {/* Key Features */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose PhiMart?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                            <p className="text-gray-600 text-sm">Quick and reliable shipping to get your orders to you as soon as possible.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
                            <p className="text-gray-600 text-sm">Multiple secure payment options to ensure your transactions are safe and protected.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                            <p className="text-gray-600 text-sm">Round-the-clock customer support to assist you with any questions or concerns.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-center text-red-600">Our Team</h3>
                    <p className="text-gray-700 text-center mb-6">
                        Meet the passionate individuals behind PhiMart who work tirelessly to bring you the best shopping experience.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">JD</span>
                            </div>
                            <h4 className="font-semibold">John Doe</h4>
                            <p className="text-gray-600 text-sm">CEO & Founder</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">JS</span>
                            </div>
                            <h4 className="font-semibold">Jane Smith</h4>
                            <p className="text-gray-600 text-sm">CTO</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">MJ</span>
                            </div>
                            <h4 className="font-semibold">Mike Johnson</h4>
                            <p className="text-gray-600 text-sm">Head of Operations</p>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">Get In Touch</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-semibold text-blue-600">Email</h4>
                            <p className="text-gray-600">mahfujurrahmansaif@gmail.com</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-semibold text-green-600">Phone</h4>
                            <p className="text-gray-600">+880 01626478828</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-semibold text-purple-600">Address</h4>
                            <p className="text-gray-600">Mirpur,Dhaka</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-gray-700">
                            Have questions or feedback? We'd love to hear from you. Reach out to our team anytime!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
