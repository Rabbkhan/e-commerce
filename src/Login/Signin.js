import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Signin = () => {
  const navigate = useNavigate()

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const [isLoading,setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(true);


    const authCtx = useContext(AuthContext)

    const submitHandler = (event) => {
        event.preventDefault()

    
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        setIsLoading(true)


        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDX43zQVaf3t-Hb9Gqap_JUSumjpZmNPcM',{
            method:'POST',
            body:JSON.stringify({
              email:enteredEmail,
              password:enteredPassword,
              returnSecureToken:true
            }),
            headers:{
              'content-type':"application/json"
            }
          })
          .then((res) => {
            setIsLoading(false)
            if(res.ok){
              return res.json();
            }else{
              return res.json().then((data) => {
                let errorMessage = 'Authentication failed';
                
                throw new Error(errorMessage)
              })
            }
          })
          .then((data) => {
            authCtx.login(data.idToken, enteredEmail)
            alert('Login successfully')
            navigate('/store')
    
          })      
          .catch((err) => {
            alert(err.message)
          })
    
    } 

  return (
    <div className="mt-28 w-full max-w-xs mx-auto">
      <h1 className="text-center font-semibold border-b-2 border-red-400 w-28 mx-auto text-lg">
        Signin Form
      </h1>
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto mt-10"
      >
        <div className="mb-4">
          <label htmlFor="email">Email Id</label>
          <br />
          <input
            type="email"
            id="email"
            ref={emailInputRef}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
          />
        </div>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        <div className="w-full">
          <button
            className="bg-slate-950 text-slate-50 py-2 px-5 rounded"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </div>
        <p>
          If you are not logged in, go to{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>{" "}
          first.
        </p>
      </form>
    </div>
  );
};

export default Signin;
