import { useState } from 'react'
import './App.css'

interface CounterProps {
  cnt?: number
}
const  Counter: React.FC<CounterProps> =({})=> {
  const [count, setCount] = useState(0)

const increment = () => { 
  setCount(()=>count+1)
}

const decrement=()=>{
  if(count>0)
  setCount(()=>count-1)
}

const reset=()=>{
  setCount(()=>0)
}


  return (
    <>
      <h1 className="header-text">Click counter</h1>
      <div className='App'>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
        <button onClick={reset}>
          Reset
        </button>
        <label >
          Count is <span className={count>=5?'colorTextGreen':'colorTextRed'}>{count}</span>
        </label>

      </div>

    </>
  )
}

export default Counter