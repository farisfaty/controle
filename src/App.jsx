import React from 'react'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Eror from './pages/Eror'



export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
     
      <Route path='/Contact' element ={<Contact/>}/>
      <Route path='/Eror' element ={<Eror/>} />
    </Routes>
    

    

    </>
  )
}
