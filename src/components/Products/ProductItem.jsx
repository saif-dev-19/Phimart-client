import React from 'react';
import default_img from "../../assets/images/default.png"
import { Link } from 'react-router';

const ProductItem = ({product}) => {
    return (
      <Link to={`/shop/${product.id}`}>
        <div className="card bg-base-100 w-65 shadow-sm h-[350px]">
          <figure className="px-6 pt-6">
            <img
              src={product.images.length > 0 ? product.images[0].image : default_img}
              alt="Product"
              className="rounded-xl w-48 h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center px-4 py-2">
            <h2 className="card-title text-lg">{product.name}</h2>
            <h3 className="font-bold text-lg text-cyan-600">${product.price}</h3>
            <p className="text-sm line-clamp-3">{product.description}</p>
            <div className="card-actions">
              <button className="btn btn-neutral btn-sm">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>

    );
};

export default ProductItem;