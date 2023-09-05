import React from 'react'

function Product({id, productName, aprice, oprice}) 
{
    return (
    <>
        <div>
            <h1>Id: {id}</h1>
            <h1>Name: {productName}</h1>
            <h1>Actual Price: {aprice}</h1>
            <h1>Offered Price: {oprice}</h1>
        </div>
    </>
  )
}

export default Product
