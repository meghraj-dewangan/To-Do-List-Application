import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div className='appcontainer'>
      <Header/>
      <Body/>
      <Footer/>

    </div>

    </>
  )
}

export default App
