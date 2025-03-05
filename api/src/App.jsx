import React from 'react'
import {ToastContainer} from "react-toastify"
import News from './pages/News'

const App = () => {

  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <News/>
    </div>
  )
}

export default App
