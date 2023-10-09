import React, { useEffect, useState } from 'react';
import Form from './Form';
import Table from './Table';
import { getData,deleteData,postData,putData } from './api.js'
import './index.css'

function App() 
{
    const [products, setProducts] = useState([])
    const [openForm, setopenForm] = useState(false)
    const [edit, setEdit] = useState(false)
    const [initalForm, setinitailForm] = useState({
        name:'',
        price:'',
        category:''
    })

    useEffect(() => {
        getProducts()
    }, [])

    let getProducts = async () => {
        let res = await getData()
        setProducts(res.data)
    }

    let deleteProduct = async (id) => {
        await deleteData(id)
        getProducts()
    }

    let showForm = () => {
        setopenForm(true)
        setinitailForm({
            name:'',
            price:'',
            category:''
        })
    }

    let closeForm = () => {
        setopenForm(false)
    }

    let addProducts = async (product) => {

        let data = {
            name: product.name,
            price: product.price,
            category: product.category
        }

        if(edit)
        {
            await putData(product.id, data)
        }
        else
        {
            await postData(data) 
        }
        getProducts()
        setopenForm(false)
    }

    let editProduct = async (data) => {
        setinitailForm(data)
        setopenForm(true)
        setEdit(true)
    }

    return (
        <>
            <div className='wrapper m-5 w-50'>
                <h1 className='text-primary'>CRUD Operations</h1>
                <button className='btn btn-primary' onClick={() => {
                    showForm()
                }}>Add Product</button>

                <Table products={products} delete={deleteProduct} edit={editProduct}/>

                {openForm && <Form closeForm={closeForm} data={initalForm} add={addProducts}/>}
            </div>
        </>
    );
}

export default App;