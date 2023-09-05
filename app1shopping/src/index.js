import React from 'react';
import './index.css';
import App from './App';  // step - 1
import reportWebVitals from './reportWebVitals';
import CBC from './CBC';
import FBC from './FBC';
import { createRoot } from 'react-dom'; // step



// // ReactDOM.render(<App />, document.getElementById('root'));  // step - 2


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <CBC/>
//     <FBC/>
//   </React.StrictMode>
// );


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CBC value="manak"/>
    <FBC tisn="ndjje"/>
  </React.StrictMode>
);

reportWebVitals();
