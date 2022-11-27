import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Dashboard  from './components/user/Dashboard';
import { Main } from './components/user/Main';
const App = () => {
  return (
    <>
      <Routes>
        <>
          <Route path='/' element={< Main/>} />
          <Route path='/dashboard' element={< Dashboard/>} />
        </>
      </Routes>
    </>
  )
}

export default App