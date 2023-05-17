import { useState } from 'react'
import './App.css'

function App(){
  const [value, setValue] = useState(0)

  return (
    <>
    <div>
      <h1>Simple React Counter</h1>
      <p>{value}</p>
      <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
      <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
      <button className='btn' onClick={() => setValue(0)}>Reset</button>


    </div>
    </>
  )
}

export default App