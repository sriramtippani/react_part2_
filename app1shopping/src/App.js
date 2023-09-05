import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'; // step - 3A
import React from 'react'; // step - 3B

// step - 4
// const pic = 'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000';
// const effect = 'container'; 


//It is one type
//----------------------

// const element = React.createElement(
//                                       'div',
//                                       {className: 'container', align: 'right'},
//                                       'Hi I am Trained in Durga software solutions',
//                                       React.createElement(
//                                         'h1',
//                                         { align: 'left' },
                                        
//                                       ),
//                                       React.createElement(
//                                         'p',
//                                         { style: { color: 'blue' } },
                                        
//                                       )
//                                    );


//It is another type
//----------------------

// const element = (
//   <div className='container' align='center'>
//     <h1>This one</h1>

//   </div>
// );

// ReactDOM.render(element,
// document.getElementById('root'));


// It is another type:
//----------------------

// const textTile = 'Login Page';
// const Login = () => (
//                       <>
//                       <h3 align="center">{textTile}</h3> <dl>
//                       <dt>User Name</dt>
//                       <dd><input type="text" className="form-control" /></dd>
//                       <dt>Password</dt>
//                       <dd><input type="password" className="form- control" /></dd>
//                       </dl>
//                       <button className="btn btn-primary btn- block">Login</button>
//                       </>
//                     );
// ReactDOM.render(<Login />,
//                 document.getElementById('root') );


// It is another type
//----------------------

// function temfun1()
// {
//   return "Iove Gossip :) ...."
// }

// var val2 = "HYUIOP";
// class Login extends React.Component
// {
//   val1 = "KKIIMM";
//   render()
//   {
//     return(
//       <>
//         <h3 align="center">Hemanth number one confussion student form {temfun1()} {this.val1}</h3> <dl>
//         <dt>User Name</dt>
//         <dd><input type="text" className="form-control" /></dd>
//         <dt>Password</dt>
//         <dd><input type="password" className="form- control" /></dd>
//         </dl>
//         <button className="btn btn-primary btn- block">{val2}</button>
//       </>
//     );
//   }
// }
// ReactDOM.render(<Login/>, 
//                 document.getElementById("root"));


// Finctional Components:
//----------------------

// const Elem = obj => (
//   <div className="card">
//     <div className="card-header">
//       <h3>{obj.Name}</h3>
//     </div>
//     <div className="card-header">
//       <h3>{obj.phoneNo}</h3>
//     </div>
//   </div>
// );
// ReactDOM.render(
//   <Elem Name={'SRI_SRI'} phoneNo={8332993283} />,
//   document.getElementById('root'));

// Class components:
//------------------

// class Product extends React.Component
// {
//   name = "One man army";
//   phonno = 9437839202;
//   render()
//   {
//     return (
//       <div className="card">
//         <div className="card-header">
//           <h3>{this.name}</h3>
//         </div>
//         <div className="card-header">
//           <h3>{this.phonno}</h3>
//         </div>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Product/>,
// document.getElementById('root'));

//Reusing the components with different values passed into Props
//----------------------

// class Header extends React.Component 
// {
//   render()
//   { 
//     return (
//             <header className="bg-danger text-white text- center">
//               <h1>Amazon Shopping</h1> 
//             </header>
//           ) 
//   }
// }

// class MenuContent extends React.Component 
// {
//   render() 
//   { 
//     return (
//               <nav> 
//                 <ul>
//                     <li><span className="fa fa-home"></span> Home</li>
//                     <li><span className="fa fa-tv"></span> Electronics</li>
//                     <li><span className="fa fa-bell"></span> Fashion</li>
//                 </ul> 
//               </nav>
//            )
//   }
// }

// class Product extends React.Component 
// {
//   render() 
//   { 
//     return (
//           <div className="card">
//             <div className="card-header text-center">
//               <h3>{this.props.Name}</h3> 
//             </div>
//             <div className="card-footer text-center">
//               <h4>{this.props.Price}</h4>
//             </div> 
//           </div>
//             ) 
//   }
// }

// class Products extends React.Component 
// {
//   render()
//   { 
//     return (
//             <div className="card-deck">
//               <Product Name={'Nike Casuals'} Price={5600.66} Photo={'shoe.jpg'} />
//               <Product Name={'Lee Boot'} Price={4000.55} Photo={'shoe1.jpg'} />
//               <Product Name={'JBL Speaker'} Price={5000.55} Photo={'speaker.jpg'} />
//             </div> 
//          )
//   } 
// }

// class MainContent extends React.Component
// { 
//   render()
//   {
//   return ( 
//   <>
//     <Header /> 
//       <section>
//         <div className="row"> 
//           <div className="col-3">
//             <MenuContent /> 
//           </div>
//           <div className="col-9">
//             <Products />
//           </div>
//         </div>
//       </section>

//       <footer className="text-center">
//         &copy; Copyright 2023; 
//     </footer>
//   </> 
//          )
//   } 
// }
// ReactDOM.render(<MainContent />, 
//                 document.getElementById('root'));
  

// Multi-level Hierarchy
//----------------------
// class Funone
// {
//   nameStudent = 'durga';
//   pnumber = 9384992021;
// }

// class Funtwo extends Funone
// {
//   mdf = new Date();
//   productName = 'Sanwjn Enterprices';
// }

// class Prefun extends React.Component
// {
//   render()
//   {
//     const obj = new Funtwo();
//     return (
//       <div className="card">
//         <div className="card-header">
//           <h3>{obj.productName}</h3> 
//         </div>

//         <div className="card-footer">
//           <h3>{obj.nameStudent}</h3> 
//           <p>{obj.pnumber}</p>
//           <p>{obj.mdf.toDateString()}</p> 
//         </div> 
//       </div>
//     )
//   }
// }

// class MainContent extends React.Component
// {
//   render()
//   {
//     return (
//       <>
//         <Prefun />
//       </>
//     )
//   }
// }
// ReactDOM.render(<MainContent/>, 
//                 document.getElementById('root'));



function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;