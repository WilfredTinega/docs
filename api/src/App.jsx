import React from 'react'
import {ToastContainer} from "react-toastify"
import Today from './pages/Today'

const App = () => {

  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <Today/>
    </div>
  )
}

export default App
