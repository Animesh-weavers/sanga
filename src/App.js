import React, { useContext } from 'react'
import NavigationBar from './Components/NavigationBar'
import { Routes, Route } from 'react-router-dom'
import FindClasses from './Components/FindClasses';
import JoinAsATeacher from './Components/JoinAsATeacher';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ChangePassword from './Components/ChangePassword';
import ForgetPassword from './Components/ForgetPassword';
import AuthContext from './Auth/auth-context';

const App = () => {
  const authCtx=useContext(AuthContext);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<FindClasses />} />
       {authCtx.isLoggedIn && <Route path='/joinasteacher' element={<JoinAsATeacher />} />}
        {!authCtx.isLoggedIn && <Route path='/login' element={<Login />} />}
        {!authCtx.isLoggedIn && <Route path='/signup' element={<Signup />} />}
        {authCtx.isLoggedIn && <Route path='/changepassword' element={<ChangePassword />} />}
        {!authCtx.isLoggedIn && <Route path='/forgetpassword' element={<ForgetPassword />} />}
      </Routes>
    </>
  )
}

export default App