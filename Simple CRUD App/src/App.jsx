import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Userlist from './components/Userlist';
import Updateuser from './components/Updateuser';
import Adduser from './components/Adduser';
function App() {

  return (
    <div className="App">
       <h1>CRUD REACT REDOX LIST </h1>
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<Userlist/>}/>
          <Route path='/add-user' element={<Adduser/>}/>
          <Route path='update-user/:id' element={<Updateuser/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
