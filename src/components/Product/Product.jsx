import React from 'react'
import './Product.css'
import { HiShoppingCart } from "react-icons/hi";

function Product({ product, handleCart }) {
    // console.log(props.product.id)
    const { name, img, price, seller, ratings } = product
    return (
        <div className='product'>
            <div className="productImage">
                <img src={img} alt="" />
            </div>
            <div className='productInfo'>
                <p className='productName'>{name}</p>
                <p className='productPrice'>Price: ${price}</p>
                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p className='rating'><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleCart(product)} className='cartButton'>Add to Cart <span><HiShoppingCart /></span></button>
        </div>
    )
}
// HiShoppingCart
export default Product