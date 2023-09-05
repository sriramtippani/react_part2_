import './index.css'


export function Header() 
{
  return (
    <>
      <ol>
        <li className="reest" id="list">Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Help</li>
        <li>Reference</li>
        <li>Sum: {sumation()}</li>
      </ol>
      <input type="checkbox" id="sub"></input>
      <label htmlFor="sub">Image Identification</label>
    </>
  )
}

function sumation()
{
    const val1 = parseInt(prompt('enter number-1: '))
    const val2 = parseInt(prompt('enter number-2: '))
    const result = (val1+val2)
    return result
}