import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admin from './admin/Admin'
import SellerLogin from './seller/SellerLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SellerLogin />
    </>
  )
}

export default App
