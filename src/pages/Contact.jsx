import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <div className="max-w-md mx-auto">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
                    <p className="text-gray-600 mb-4">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                    <p className="text-gray-600">Email: mahfujurrahmansaif@gmail.com</p>
                    <p className="text-gray-600">Phone: +880 01626478828</p>
                    <p className="text-gray-600">Address: Mirpur,Dhaka</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
