import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

const useFetchProduct = (currentpage, priceRange,selectedCategory,searchQuery,sortOrder) =>{

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages,settotalPages] = useState(0);

    useEffect (() =>{
        const fetchProducts = async () =>{
            setLoading(true);
            const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentpage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;
            try{
                const response =await apiClient.get(url);
                const data = await response.data

                setProducts(data.results);
                settotalPages(Math.ceil(data.count / data.results.length));
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false)
            }
        };
        fetchProducts()
    },[currentpage,priceRange,selectedCategory,searchQuery,sortOrder]) ;

    return {products,loading,totalPages}
};

export default useFetchProduct