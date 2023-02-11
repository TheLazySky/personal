import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import './components/timeclock'
import AddClock from './components/timeclock'
import AddClockIn from './components/clockIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <div className="clock">
    <AddClock>  
    </AddClock>
   </div>
   <div className="clockin">
    <AddClockIn>
    </AddClockIn>
   </div>
    </div>
  )
}

export default App
