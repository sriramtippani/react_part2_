import React, { useEffect } from 'react'
import { useState } from 'react'
import Productcard from './Productcard.js'
import './App.css'

function App() 
{
    let [products, updateProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts()
    {
        let res = await fetch('https://fakestoreapi.com/products')
        let productList = await res.json()
        updateProducts(productList)
        
    }

    if(products.length === 0)
    {
        return (<h1>Fetching Data...</h1>)
    }

    return (
    <>
        <div className='product-list'>
            {products.map((p) => 
                <Productcard {...p} key={p.id}></Productcard>
            )}
        </div>

    </>
  )
}

export default App
