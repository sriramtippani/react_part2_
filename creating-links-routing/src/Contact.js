import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Contact() 
{
    return (
    <>
      <div>
        <button><Link to="orders">Orders</Link></button>&nbsp;&nbsp;
        <button><Link to="profile">Profile</Link></button>
      </div>
        <p>This is Contact page</p>
        <Outlet/>
        <p>Then this display this content, check</p>
    </>
  )
}

export default Contact



export function Orders() 
{
  return (
    <>
      <div>
        <h1>This is orders page content</h1>
      </div>
    </>
  )
}


export function Profile() 
{
  return (
    <>
      <div>
        <h1>This is Profile page content</h1>
      </div>
    </>
  )
}

