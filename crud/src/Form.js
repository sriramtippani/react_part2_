import React, { useState } from 'react';

function Form(props) 
{
    const [product, setProduct] = useState(props.data)

    const [submitted, setSubmitted] = useState(false)

    let onchangeFormData = (event) => {
        const {name, value} = event.target
        setProduct({...product, [name]: value})
    }

    return (
        <>
            <div className='form-overlay'>
                <form>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input className='form-control mt-2' value={product.name} name='name' onChange={onchangeFormData} type='text' placeholder='Enter name'/>
                        {submitted && product.name === '' && <span className='text-danger'>Name field is required</span>}
                    </div>
                    <div className='form-group'>
                        <label>Price:</label>
                        <input className='form-control mt-2' value={product.price} name='price' onChange={onchangeFormData} type='number' placeholder='Enter price'/>
                        {submitted && product.price === '' && <span className='text-danger'>Price field is required</span>}
                    </div>
                    <div className='form-group'>
                        <label>Category:</label>
                        <select className='form-control mt-2' value={product.category} name='category' onChange={onchangeFormData}>
                            <option value='-1'></option>
                            <option value={'mobiles'}>Mobiles</option>
                            <option value={'laptops'}>Laptops</option>
                            <option value={'tv'}>TV's</option>
                        </select>
                        {submitted && product.category === '' && <span className='text-danger'>Category field is required</span>}
                    </div>
                    <button className='btn btn-primary float-end' onClick={(e) => {
                        setSubmitted(true)
                        e.preventDefault()
                        if(!!product.name && !!product.price && !!product.category)
                        {
                            props.add(product)
                        }  
                    }}>Send</button>
                    <button className='btn btn-danger float-end' onClick={(e) => {
                        e.preventDefault()
                        props.closeForm()
                    }}>Cancel</button>
                </form>
            </div>
        </>
    );
}

export default Form;