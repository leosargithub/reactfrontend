import React, { use, useState } from 'react'

const Test = () => {

const [count, setCount] = useState(0)
 
function increaseCount(){
   setCount(count + 1)

  }
  function decreaseCount(){
    setCount(count - 1)
  }

  return (
    <div>
     <h2>{count}</h2>
     <button onClick={increaseCount}>+</button>
     <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Test
