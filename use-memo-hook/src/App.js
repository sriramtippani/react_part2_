// import React, { useMemo, useState } from 'react';

// function App() 
// {
//   const [counter, setCounter] = useState(1);

//   let num1 = 2;
//   let num2 = 30;

//   let sum = useMemo(
//     () => {
//       return num1 + num2
//     }, [num1, num2]
//   )
//   return (
//     <>
//       <button onClick={() => {setCounter(counter + 1)}}>update count</button>
//       <h1>Count: {counter}</h1>
//       <h1>Sum: {sum}</h1>
//     </>
//   );
// }

import React, { useEffect, useMemo, useState } from 'react';
import './products.css'

function App() 
{
  // writing code for time which is displaying in the browser with out refreshing the server

  let [Time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(
    () => {
      setInterval(
        () => {
          setTime(new Date().toLocaleTimeString())
        }, 1000
      )
    }, []
  )

  // writing code for input field to search the products in the list

  let [products, setProducts] = useState([
    {id:1, name:'one plue', price:20080},
    {id:2, name:'oppo', price:22790},
    {id:3, name:'samsung', price:17850}
  ])

  let [searchText, UpdateSearchText] = useState('')

  let filteredProducts = useMemo(
    () => {
      return products.filter(
        (p) => {
          return p.name.toLowerCase().includes(searchText.toLowerCase())
        }
      )
    }, [products, searchText]
  )

  return (
    <>
      <div>
        Time: {Time}
      </div>

      <br></br>

      <div>
        <input type='text' value={searchText} onChange={(e) => {UpdateSearchText(e.target.value)}} placeholder='Search'></input>
      </div>

      <br></br>

      <div>
        <table>
          <tbody>
            <tr>
              <td>s.no</td>
              <td>name</td>
              <td>price</td>
            </tr>
            {
              filteredProducts.map(
                  (eachProduct) => (
                    <tr key={eachProduct.id}>
                      <td>{eachProduct.id}</td>
                      <td>{eachProduct.name}</td>
                      <td>{eachProduct.price}</td>
                    </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;