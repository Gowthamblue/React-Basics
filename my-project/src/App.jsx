import './App.css'
import { useState } from 'react'
function App() {
  const [count,SetCount] = useState(0);
  return (
    <main>
      <h1>This is this the Main Content Area</h1>
      <h5> Button Clicked {count} times</h5>
      <button className="btn btn-outline-primary m-4" onClick={()=> SetCount(count+1)}>Add</button>
      <button className='btn btn-outline-danger m-4' onClick={()=> SetCount(count-1)}>Sub</button>
    </main>

  )
}

export default App
