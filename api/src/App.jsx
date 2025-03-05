import React from 'react'
import {ToastContainer} from "react-toastify"
import Grok from './pages/Grok'

const App = () => {

  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <Grok/>
    </div>
  )
}

export default App
