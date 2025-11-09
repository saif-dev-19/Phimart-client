import React, { useState } from 'react';
import ProductItem from '../Products/ProductItem';
import ProductList from './ProductList';
import Pagination from './Pagination';
import useFetchProduct from '../../hooks/useFetchProduct';
import FilterSection from './FilterSection';
import useFetchCategories from '../../hooks/useFetchCategories';

const ShopPage = () => {
    // const [products,setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [totalPages,settotalPages] = useState(0);
    const [currentpage,setCurrentPage] = useState(1);
    const [priceRange,setPriceRange] = useState([0,1000])
    const [selectedCategory,setSelectedCategory] = useState("")
    const [searchQuery,setSearchQuery] = useState("")
    const[sortOrder,setSortOrder] = useState("")


    const {products,loading,totalPages} = useFetchProduct(currentpage,priceRange,selectedCategory,searchQuery,sortOrder);

    const categories = useFetchCategories()

    const handlePriceChange = (index,value) =>{
        setPriceRange((prev) =>{
            const newRange = [...prev]
            newRange[index] = value;
            return newRange
        })
        setCurrentPage(1);
    };
    // useEffect (() =>{
    //         const fetchProducts = async () =>{
    //             setLoading(true);
    //             try{
    //                 const response =await apiClient.get(`/products/?page=${currentpage}`);
    //                 const data = await response.data
    
    //                 setProducts(data.results);
    //                 settotalPages(Math.ceil(data.count / data.results.length));
    //             }
    //             catch(error){
    //                 console.log(error);
    //             }
    //             finally{
    //                 setLoading(false)
    //             }
    //         };
    //         fetchProducts()
    // },[currentpage]) ;
    
    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <FilterSection 
                priceRange={priceRange} 
                handlePriceChange={handlePriceChange}
                categories = {categories}
                selectedCategory={selectedCategory}
                handleCategoryChange={setSelectedCategory}
                searchQuery = {searchQuery}
                handleSearchQuery = {setSearchQuery}
                sortOrder={sortOrder}
                handleSorting ={setSortOrder}
            />
            <ProductList products={products} loading={loading}/>
            <Pagination totalPages={totalPages} currentpage={currentpage} handlePageChange={setCurrentPage}/>
        </div>
    );
};

export default ShopPage;