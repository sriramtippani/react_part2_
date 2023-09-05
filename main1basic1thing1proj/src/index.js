import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import baconnect, { val } from './App';
// import { createRoot } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



// 1. Function Based Component:
//-------------------------------

// function Index() 
// {
//   let valName = ['India', 'Canada', 'United States', 'Australia'];
//   return (
//           <>
//             <ul>
//               <li>Firsm: {valName[0]}</li>
//               <li>Csjioe: {valName[1]}</li>
//               <li>NJNmskmk: {valName[2]}</li>
//               <li>nfefjnie: {valName[3]}</li>
//             </ul>
//           </>
//   )
// }


// 2. Class Based Components:
//----------------------------

// class Index extends  React.Component 
// {
//   render() 
//   {
//     let valName = ['India', 'Canada', 'United States', 'Australia']; 
//     return (
//       <div>
//         <ul>   
//           <li>Firsm: {valName[0]}</li>
//           <li>Csjioe: {valName[1]}</li>
//           <li>NJNmskmk: {valName[2]}</li>
//           <li>nfefjnie: {valName[3]}</li>
//        </ul>
//       </div>
//     )
//   }
// }


// function Index() 
// {
//   console.log(val);
//   console.log(baconnect);
//   return (
//     <div>
      
//     </div>
//   )
// }

root.render(
            // <App name='xyz'>
            //     <button>share</button>
            //     <button>like</button>
            //     <button>subscribe</button>
            // </App>

            <App>
                
            </App>
           );



reportWebVitals();
