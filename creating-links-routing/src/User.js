import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function User() 
{
    let {id} = useParams()
    let location = useLocation()
    let queryParam = new URLSearchParams(location.search)
    let category = queryParam.get('category')
    let posts = queryParam.get('posts')

    return (
        <>
            <div>
                <h1>User id: {id}</h1>
                <h1>catagory: {category}</h1>
                <h1>Posts: {posts}</h1>
            </div>
        </>
    );
}

export default User;