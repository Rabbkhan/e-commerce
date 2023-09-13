import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Signup = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] =useState('');
   
    const createUser = (e) =>{
      e.preventDefault()
     createUserWithEmailAndPassword(auth, email, password).then(()=>{
        alert('success');
     })
    }
    
  return (
    <>

    <div className='mt-28 w-full max-w-xs mx-auto'>
    <h1 className='text-center font-semibold border-b-2 border-red-400 w-28 mx-auto text-lg'>Signup Form</h1>
     <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto mt-10'>
       
        <div className='mb-4'>
        <label> email Id</label><br/>
        <input type='email'  onChange={(e) =>setEmail(e.target.value)} value={email} />
        </div>
        <div className='mb-4'>
        <label> Password&nbsp;</label><br/>
        <input type='number' onChange={(e) =>setPassword(e.target.value)} value={password}/>
        </div>
        <div className="w-full">
          <button className='bg-slate-950 text-slate-50 py-2 px-5 rounded'onClick={createUser} >Signup</button>
          </div>
    </form>
    </div>
    </>
  )
}

export default Signup