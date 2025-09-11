import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
      <h1 className='text-teal-600' >hello duniya </h1>
    <Button variant="outline">Button</Button>
  </div>
  )
}

export default App
