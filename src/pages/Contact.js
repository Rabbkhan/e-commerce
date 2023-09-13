import React, { useState } from 'react'

const Contact = () => {
 
  const [user, setUser] = useState({
    name:'',
    email:'',
    number:''
  });
 
  let name, value;
  const getUserdata =(e)=>{
  name=e.target.name;
  value=e.target.value;

  setUser({...user, [name]: value});
};
  
const postData =async (e)=>{
  e.preventDefault();
  const{ name,email,number}= user;
  if(name && email && number){

    const res = await fetch('https://ecommerce-cd6ca-default-rtdb.firebaseio.com/eccomercedataform.json',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
      name,
      email,
      number 
    })
  });
  if(res){
    setUser({
      name:'',
      email:'',
      number:'',
    });
    alert('Data stored Succesfully')
  }else{
    alert('please fill all the Data')
  }
}

}
  return (
    <>

    <div className='mt-28 w-full max-w-xs mx-auto'>
    <h1 className='text-center font-semibold border-b-2 border-red-400 w-28 mx-auto text-lg' >Contact Form</h1>
     <form method="POST" className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto mt-10'>
        <div className='mb-4'>
        <label className='block border-b-4 border-red-400 w-6 mb-4 font-semibold text-base' htmlFor='username' > Name</label>
        <input type='text'
         name="name"
         value={user.name}
       onChange={getUserdata}
         required
         />
        </div>

        <div className='mb-4'>
        <label className='border-b-4 border-red-400 w-3 mb-4 font-semibold text-base'> email Id</label><br/>
        <input className="mt-4" 
        type='email' 
        name="email" 
        value={user.email}
        onChange={getUserdata}
        required/>
        </div>
        <div className='mb-5'>
        <label className='border-b-4 border-red-400 w-3 mb-4 font-semibold text-base'> phone number&nbsp;</label><br/>
        <input className="mt-4"
         name="number" 
         type='tel'
         value={user.number}
         onChange={getUserdata}
         required
         />
        </div>
        <div className="w-full">
          <button className='bg-slate-950 text-slate-50 py-2 px-5 rounded'  onClick={postData}>submit</button>
          </div>
    </form>
    </div>
    </>
  )
}

export default Contact