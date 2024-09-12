import React from 'react'
import Left from './home/Leftpart/Left.jsx'
import Right from './home/Rightpart/Right.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import { useAuth } from './context/Authprovider.jsx'
import  { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom'


function App ()
{
    const [authUser, setAuthUser] = useAuth()
      console.log(authUser)
  return (
    <>
        <Routes>
      <Route path="/"
        element={
          authUser ? (
            // <div className="flex h-screen">
               
              

            // </div>
        
          <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex-col items-center justify-center">
        <Right />
    
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-black text-base-content min-h-full w-80 p-4">
                  <Left />
    </ul>
  </div>
</div>
          
          
          
          
          ) : (
              <Navigate to={"/login"} />

          )
      }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route path="/signup" element={authUser ? <Navigate to="/"/> : <Signup />} />
      </Routes>
      <Toaster />
    </>
    
    

  )
}

export default App
