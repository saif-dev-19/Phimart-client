import React from 'react';

const Pagination = ({totalPages, currentpage, handlePageChange}) => {
    return (
        <div className='flex justify-center'>
         {Array.from({length :totalPages},(_, i) =>(
            <button key={i} 
                onClick={() => handlePageChange(i + 1)}
                className={`mx-1 my-8 px-3 py-1 rounded 
                    ${currentpage === i+1 ? "bg-neutral text-white" : "bg-gray-200"}`}
                >
                {i + 1}
            </button>
         ))}
        </div>
    );
};

export default Pagination;