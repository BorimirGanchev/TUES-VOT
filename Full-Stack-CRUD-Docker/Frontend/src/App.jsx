import React from 'react'
import Books from "./pages/Books"
import Add from "./pages/Add"
import Update from "./pages/Update"
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="app d-flex justify-content-center align-items-center text-center vh-100 px-5">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App