// import React, { useState } from 'react';
// import './App.css'

// function App() 
// {
//   const [email, setEmail] = useState('')

//   const [password, setPassword] = useState('')

//   const [error, setError] = useState({
//     email: '',
//     password: ''
//   })

//   // this is valid email address pattern
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   function loginButton()
//   {

//     // for email validation
//     if(email.trim() === '')
//     {
//       setError((error) => ({...error, email:'Enter email address'}))
//     }
//     else if(!emailPattern.test(email))
//     {
//       setError((error) => ({...error, email:'Enter valid email address'}))
//     }
//     else
//     {
//       setError((error) => ({...error, email:''}))
//     }

//     // for password validation
//     if(password.trim() === '')
//     {
//       setError((error) => ({...error, password:'Enter password'}))
//     }
//     else if(password.trim().length < 8)
//     {
//       setError((error) => ({...error, password:"password should minimum 8 characters"}))
//     }
//     else
//     {
//       setError((error) => ({...error, password:''}))
//     }
//   }

//   return (
//     <>
//       <div className='border w-50 mt-200 m-auto p-5' id='getBorder'>
//         <form method='post' action=''>
//           <h2 className='text-primary text-center'>Login Form</h2>

//           <div className="form-group row">
//             <label HtmlFor="inputEmail" className="col-sm-2 col-form-label">Email:</label>
//             <div className="col-sm-10">
//               <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
//               {error.email && <span className='text-danger'>{error.email}</span>}
//             </div>
//           </div>

//           <div className="form-group row mt-4">
//             <label HtmlFor="inputPassword" className="col-sm-2 col-form-label">Password: </label>
//             <div className="col-sm-10">
//               <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
//               {error.password && <span className='text-danger'>{error.password}</span>}
//             </div>
//           </div>

//           <div className='mt-5 text-center'>
//             <button type="button" className="btn btn-success" onClick={loginButton}>Login</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;













// Api integration with axios library

// import React, { useEffect } from 'react';
// import axios from 'axios'

// function App() 
// {
//   let api = axios.create({
//     baseURL: 'https://fakestoreapi.com'
//   })

//   async function getProducts()
//   {
    // for get request in API

    // let res = await api.get('/products')

    // for post request in API

    // let res = await api.post('/products', {
    //   id: 21,
    //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //   price: 109.95,
    //   count: 120,
    //   rate: 3.9,
    //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    // })

    // for patch request in API
//     let res = await api.patch('products/7', {
//       title: 'test product',
//       price: 13.5,
//       description: 'lorem ipsum set',
//       image: 'https://i.pravatar.cc',
//       category: 'electronic'
//     })

//     console.log(res.data)
//   }

//   useEffect(
//     () => {
//       getProducts()
//     }, []
//   )

//   return (
//     <>
//       <div>
//         <h1>This is Api integration with axios</h1>
//       </div>
//     </>
//   );
// }

// export default App;













// lazy loading with conditional rendering
// import React, { Suspense, lazy, useState } from 'react';

// const FormView = lazy(() => import('./Form.js'));

// function App() 
// {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       <div>
//         <h1>lazy loading</h1>
//         <button onClick={() => {setShow(true)}}>open</button>
//       </div>
//       {
//         show === true && (<Suspense> <FormView/> </Suspense>)
//       }
//     </>
//   );
// }

// export default App;









// higher order components
// import React from 'react';

// function User(props)
// {
//   return (
//     <>
//       <div>
//         <h1>this is user page</h1>
//         <h2>good to see you {props.workerName}</h2>
//       </div>
//     </>
//   )
// }

// function Login()
// {
//   return (
//     <>
//       <div>
//         <h1>this is login page</h1>
//       </div>
//     </>
//   )
// }

// function AuthCheck(Component) 
// {
//   let authenticated = true

//   return (props) => {
//     if(authenticated)
//     {
//       return <Component {...props}/>
//     }
//     else
//     {
//       return <Login/>
//     }
//   }
// }

// const AuthChecked = AuthCheck(User)


// function App() {
//   return (
//     <>
//       <div>
//         <AuthChecked workerName='gmsnen'/>
//       </div>
//     </>
//   );
// }

// export default App;










// portal concept in react
import React, { useState } from 'react';
import ReactDOM  from 'react-dom';
import './App.css'


function Model(props) 
{
  return (
    ReactDOM.createPortal(
      <>
        <div className='modal-overlay'>
          <div className='content'>
            <h1>this is model view in this page</h1>
            <p>vbewhbh bdhwb bhcwbhb byhewh bhehuh jihdchwji hudhwuh</p>
            <button className='btn btn-danger' onClick={props.closeButton}>close</button>
          </div>
        </div>
      </>, document.body
    )
  );
}


function App() 
{
  const [showModel, setshowModel] = useState(false)

  function toggleModel()
  {
    setshowModel(!showModel)
  }

  return (
    <>
      <div className='app'>
        <button className='btn btn-primary' onClick={toggleModel}>open content</button>
        {showModel && <Model closeButton={toggleModel}/>}
      </div>
    </>
  );
}

export default App;