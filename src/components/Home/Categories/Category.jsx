import React, { useEffect, useState } from 'react';
import apiClient from "../../../services/api-client"
import CategoryItems from './CategoryItems';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        apiClient.get("/categories")
        .then((res) => setCategories(res.data));
    }, [])

    return (
        <section className='mx-auto px-4 py-8 max-w-7xl '>
            {/* Category heading */}
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-3xl font-bold '>Browse Categories</h2>
                <a href="#" className='btn btn-neutral px-3 py-1 rounded-full text-lg'>View all</a>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4'>
                {categories.map((category,index) => (
                    <CategoryItems key={category.id} index={index} category={category}/>
                ))}
            </div>
        </section>
    );
};

export default Category;