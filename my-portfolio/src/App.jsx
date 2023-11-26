import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './components/Nav'
import { About } from './components/About'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <About />
    </>
  )
}

export default App
