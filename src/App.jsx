import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const handleIncrement = (increment) => {
    setCounter(counter+increment)
  }
  const handleClear = () => {
    setCounter(0)
  }
  return (
    <>
      <Button handleIncrement={handleIncrement} increment={1} />
      <Button handleIncrement={handleIncrement} increment={5} />
      <Button handleIncrement={handleIncrement} increment={10} />
      <Button handleIncrement={handleIncrement} increment={100} />
      <button onClick={handleClear}>Clear</button>
      <Display counter={counter}/>
    </>
  )
}

export default App
