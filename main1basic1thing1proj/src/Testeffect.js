import React, { useEffect, useState } from 'react'

function Testeffect() 
{
    let [timer, updateTimer] = useState(0)
    let [count, updateCount] = useState(0)

    function timerSet()
    {
        updateTimer(timer + 1)
    }

    function countSet()
    {
        updateCount(count + 1)
    }

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
    <>
        <div>
            <h1>Timer: {timer}</h1>
            <button onClick={timerSet}>update Timer</button>
            <button onClick={countSet}>update Count</button>
        </div>
    </>
  )
}
export default Testeffect