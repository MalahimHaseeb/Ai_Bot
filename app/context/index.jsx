"use client"
import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(1);

  // Check Login Credentials
  const [login, setLogin] = useState({
    user: null,
    token: "",
    role: null,
    id: null
  })
  if (typeof window !== 'undefined') {
  const storedAuth = localStorage.getItem('auth');
  if (storedAuth) {
    const { name, token, role, id } = JSON.parse(storedAuth);
    login.user = name;
    login.token = token;
    login.role = role;
    login.id = id;
  }}
  //Logout Functionality
  const logout = () => {
    if (typeof window !== 'undefined') {
    localStorage.removeItem('auth')}
    setLogin({
      user: null,
      token: "",
      role: null,
      id: null
    });
  }

  // Check Authorization
  const [auth , setAuth] = useState(false)
  const authCheck = async () => {
    // console.log(login.token )
     const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BACKEND}/user/user-auth`,{
       headers : {
         "Authorization" : login?.token 
       }
     });
    //  console.log(res)
     if(res.ok) {
       setAuth(true)
     } else { 
       setAuth(false)
     }
   }

   if (login.token) authCheck()

  return (
    <AppContext.Provider value={{ state, setLogin , login , logout , auth}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
