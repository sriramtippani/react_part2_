import React from 'react';

function Table(props) 
{
    return (
        <>
            <table className='table m-3'>
                <thead>
                    <tr> 
                        <th>ID</th>
                        <th>Product Title</th>
                        <th>Price ($)</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.products.map(
                        (data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.category}</td>
                                <td>
                                    <button className='btn btn-primary m-1' onClick={() => {
                                        props.edit(data)
                                    }}>Edit</button>
                                </td>
                                <td>    
                                    <button className='btn btn-danger m-1' onClick={() => 
                                        props.delete(data.id)
                                    }>Delete</button>
                                </td>
                            </tr>
                        )
                    )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;