import './App.css';
// import {Header} from './header';
// import User from './User';
import Testeffect from './Testeffect';

// function App() 
// {
//   return (
//     <div>
//       <Header/>
//       <User name="durga"/>
//     </div>
//   )
// }


// function Findone() 
// {
//   return (
//     <div>
//       <h1>fvhgk</h1>
//     </div>
//   )  
// }


// child props in react js
//-------------------------
// import React from 'react'

// function App(props) 
// {
//   function Answer()
//   {
//     alert('number')
//   }
//   return (
//     <div>
//       <h1>This is heading tag</h1>
//       <p>This is paragraph tag</p>
//       <p style={{gap:20, display:'flex'}}>{props.children}</p>
//       <Findone/>
//       <button></button>
//     </div>
//   )
// }



//useState by using functional components to take dynamic way by the user
//-------------------------------------------------------------------------

// import React, { useState } from 'react'

// function App() 
// {

//   let [number, countNumber] = useState(0)

//   function setNumber()
//   {
//     countNumber(++number)
//   }

//   return (
//     <>
//     <h1>Count the value:{number} </h1>
//     <button onClick={setNumber}>Click to Count</button>
//     </>
//   )
// }

//useState by using functional components to take dynamic way by the user(another way)
//------------------------------------------------------------------------------------

// import React, { useState } from 'react'

// function App() 
// {

//   let [number, countNumber] = useState(0)

//   return (
//     <>
//       <h1>Count the value:{number} </h1>
//       <button onClick={() => {
//                               countNumber(++number)
//                              }
//                       }>Click to Count</button>
//     </>
//   )
// }

//state and setState by using class components to take dynamic way by the user
//---------------------------------------------------------------

// import React, { Component } from 'react'

// class App extends Component 
// {
//   state = {
//     number : 0,
//     number2 : 0
//   }

//   constructor()
//   {
//     super();
//     this.clickCount = this.clickCount.bind(this)
//     this.clickCountt = this.clickCountt.bind(this)
//   }

//   clickCount() 
//   {
//     this.setState({
//       number : this.state.number + 1
//     })
//   }

//   clickCountt()
//   {
//     this.setState({
//       number2 : this.state.number2 - 2
//     })
//   }

//   render() 
//   {
//     return (
//       <>
//       <h1>Count number: {this.state.number}</h1>
//       <h1>Count number2: {this.state.number2}</h1>
//       <button onClick={this.clickCount}>Count the number</button>
//       <button onClick={this.clickCountt}>Count the number2</button>
//       </>
//     )
//   }
// }

//by using setState and bind for class based components
//------------------------------------------------------
// import React, { Component } from 'react'

// class App extends Component 
// {

//   state = {
//     name : "real me 8 pro",
//     price : 20000
//   }

//   constructor()
//   {
//     super();
//     this.productUpdate = this.productUpdate.bind(this)
//     this.priceUpdate = this.priceUpdate.bind(this)
//   }

//   productUpdate()
//   {
//     let prod = document.getElementById('product').value;

//     this.setState({
//       name : prod
//     })
//   }

//   priceUpdate()
//   {
//     let pri = document.getElementById('price').value;

//     this.setState({
//       price : pri
//     })
//   }
//   render() 
//   {
//     return (
//       <>
//         <h1>Product name: {this.state.name}</h1>
//         <p>Price: {this.state.price}</p>

//         <div style={{display:'flex', gap:50}}>
//           <input type='text' id='product'></input>
//           <input type='number' id='price'></input>
//         </div>

//         <div style={{display:'flex', gap:50, marginTop:'50px'}}>
//           <button onClick={this.productUpdate}>Update product name</button>
//           <button onClick={this.priceUpdate}>Update product price</button>
//         </div>
//       </>
//     )
//   }
// }


//=======================================================================
//how to use spread operator syntax by using functional based components
//=======================================================================
// import React, { useState, useRef } from 'react'

// function App() 
// {
//     let [product, updateProduct] = useState({
//         name : 'Cucumber to find bugs in automation testing',
//         price : 0,
//         address : 'hyderabad',
//     })

//     const priceInput = useRef(null);

//     function updatepriceValue()
//     {
//         const cost = priceInput.current.value;

//         updateProduct({
//             ...product,
//             price : cost
//         });

//         priceInput.current.value = ''
//     }

//   return (
//     <>
//         <div>
//             <h1>Hi to all React Learners</h1>
//             <p>Product name: {product.name}</p>
//             <p>Product address : {product.address}</p>
//             <p>Product price: {product.price}</p>
//         </div>
//         <div>
//             <input type='number' id = 'price' ref = {priceInput}></input>
//             <button onClick={updatepriceValue}>price update</button>
//         </div>
//     </>
//   )
// }



//background color changer by using react:
//----------------------------------------
// import React from 'react'
// import './wrapper.css'

// function App() 
// {
    
//     function colorUpdate(props)
//     {
//         document.body.style.background = props.target.value
//     }

//   return (
//     <>
//         <div className='Wrapper'> 
//             <h1>Background color changer</h1>
//             <input type='color' onChange={colorUpdate} id = 'cr'></input>
//         </div>
//     </>
//   )
// }



//counter app in react js
//------------------------
// import React, { useState } from 'react'

// function App() 
// {
    
//     let [counter, updateCount] = useState(0)

//     let stock = 10

//     function updateMines()
//     {
//         if(counter > 0)
//         {
//             updateCount(counter - 1)
//         }
//     }
    
//     function updatePlus()
//     {
//         if(counter < stock)
//         {
//             updateCount(counter + 1)
//         }
//     }

//     return (
//     <>
//         <button onClick={updateMines}>-</button>
//         <p>{counter}</p>
//         <button onClick={updatePlus}>+</button>
//     </>
//   )
// }


//props destructing in react js
//-----------------------------
// import React from 'react'
// import Product from './Product.js'

// function App() 
// {
//     let allProducts = {
//         id : 1,
//         productName : "React js class follow",
//         aprice : 200090,
//         oprice : 198024 
//     }

    

//     return (
//     <>
//         <Product {...allProducts}/>
//     </>
//   )
// }




//useEffect() hook in react:
//--------------------------
import React from 'react'

function App() 
{
    return (
        <>
        <Testeffect>
            
        </Testeffect>
        </>
  )
}



export default App

//next method:

// export let val = {
//   name:'durga',
//   phone: 8209283992,
//   married: true
// }
// let baconnect = 10
// export default baconnect
