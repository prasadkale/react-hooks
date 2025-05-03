import './App.css'

import Header from './Components/header'
import Footer from './Components/footer'
import SampleTable from './Components/sample-table'

import { useState } from 'react'
import './index.css'    
import Counter from './Counter'

const  App: React.FC =({})=> {

    const [count, setCount] = useState(0);
    const buttonText = "Click me!";
  return (
    <>
  
    <div className='fixedElement'><Header/></div>
    <div className='fixedElementFirst'>
    <Counter />
    </div>
    <div className='fixedElementSecond'>
    <SampleTable count={count}/>
    </div>    
    <div className='fixedElementBottom'>
      <Footer buttonName={buttonText} onClick= {()=> {setCount(()=>count+1)}} onmouseOver={()=>console.log('On mouse over')} />
    </div>
  
    </>
  )
}

export default App