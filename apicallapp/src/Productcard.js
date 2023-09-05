import React from 'react'

function Productcard({title, image, price, rating}) 
{
    return (
    <>
        <div className='card'>
            <p>TITLE: {title}</p>
            <img src={image} alt='image was not found'/>
            <p>PRICE: ${price}</p>
            <p>RATING: {rating.rate}</p>
        </div>
    </>
  )
}

export default Productcard