
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Navigation } from 'swiper/modules';
import { SwiperSlide,Swiper } from 'swiper/react';
import ErrorAlert from '../ErrorAlert';
import apiClient from "../../services/api-client"

const Product = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        apiClient.get("/products/")
        .then((res) => setProducts(res.data.results))
        .catch((err) => setError(err.message)
        ).finally(() => setLoading(false));
    }, []);

    return (
        <section className='mx-auto py-10 bg-gray-100'>
            <div className='mx-auto px-4 py-12 max-w-7xl '>
                <div className='flex justify-between items-center px-4 md:px-8 mb-4'>
                    <h2 className='text-3xl md:text-4xl font-bold '>Trending Today</h2>
                    <a href="#" className='btn btn-neutral px-3 py-1 rounded-full text-lg'>View all</a>
                </div>
                {/* Slider progress */}
                {isLoading && (
                    <div className='flex justify-center items-center py-10'>
                        <span className="loading loading-dots text-neutral loading-xl"></span>
                    </div>
                )}
                {error &&
                    <ErrorAlert error = {error} />
                }

                {/* Product Slider */}

                {!isLoading && !error && products.length > 0 && (

                    <div className='flex justify-center items-center'>
                        <Swiper
                        modules = {[Navigation]}
                        spaceBetween = {1}
                        slidesPerView = {1}
                        breakpoints = {{
                            640: {slidesPerView: 2},
                            1024 : {slidesPerView: 3},
                        }}
                        navigation
                        className  = "mt-4 px-4 container "
                        >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className='flex justify-center'>
                                <ProductItem product = {product} />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                    
                )}

                {!isLoading && !error && products.length === 0 && (
                    <p className='text-center text-gray-600 mt-6'>No Product Available</p>
                )}
            </div>
        </section>
    );
};

export default Product;