import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product'
function Shop() {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    function handleCart(product) {
        setCart([...cart, product])
    }
    console.log(cart)
    return (
        <div className='shop'>
            <div className="productsContainer">
                {products.map(product => <Product handleCart={handleCart} key={product.id} product={product} />)}
            </div>
            <div className="cartContainer">
                <h1>This is cart: {cart.length}</h1>
            </div>
        </div>
    )
}

export default Shop