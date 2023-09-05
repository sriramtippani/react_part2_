import React from 'react'
import Home from './Home'
import About from './About'
import Contact, { Orders, Profile } from './Contact'
import Login from './Login'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import User from './User'

function Header()
{
    return(
        <>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/about' target='_blank'>About</Link> </li>
                <li> <Link to='/contact' target='_blank'>Contact Us</Link> </li>
                <li> <Link to='/login' target='_blank'>Login</Link> </li>
                <li><Link to='user/100?posts=5&category=admin'>User-100</Link></li>
            </ul>
        </>
    )
}

function App() 
{
    return (
    <>
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}>
                    <Route path='orders' element={<Orders/>}></Route> 
                    <Route path='profile' element={<Profile/>}></Route> 
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='user/:id' element={<User/>}></Route>
                <Route path='*' element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}


function ErrorPage() 
{
    return (
    <>
        <div>
            <h1>Oh, god page is not found</h1>
            <p>404 client error</p>
        </div>
    </>
  )
}



// import React from 'react'

// function App() 
// {
//     const langs = [{id:1, la: "HTML"}, {id:2, la: "CSS"}, {id:3, la: "Js"}]

//     return (
//     <>
//         <div>
//             <h1>Lists & Keys in react</h1>
//             {
//                 langs.map((l) => (
//                     <li key={l.id}>{l.la}</li>
//                 ))
//             }

//         </div>
//     </>
//   )
// }

export default App