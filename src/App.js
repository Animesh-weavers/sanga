import React from 'react'
import NavigationBar from './Components/NavigationBar'
import { Routes, Route } from 'react-router-dom'
import FindClasses from './Components/FindClasses';
import JoinAsATeacher from './Components/JoinAsATeacher';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ChangePassword from './Components/ChangePassword';
import ForgetPassword from './Components/ForgetPassword'

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<FindClasses />} />
        <Route path='/joinasteacher' element={<JoinAsATeacher />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='forgetpassword' element={<ForgetPassword />} />
      </Routes>
    </>
  )
}

export default App