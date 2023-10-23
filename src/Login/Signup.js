import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Reset form state
    setError(null);

    // Login API handling
    // if (isLogin) {
      try {
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDX43zQVaf3t-Hb9Gqap_JUSumjpZmNPcM',
          {
            method: 'POST',
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          // Successful login, you can handle the response here
          alert('Signup success');
          navigate('/signin')

        } else {
          // Handle login error
          const data = await response.json();
          setError(data.error.message);
        }
      } catch (error) {
        // Handle network or other errors
        setError('An error occurred while trying to login.');
      } finally {
        setLoading(false);
      }
    // }
  };

  return (
    <div className='mt-28 w-full max-w-xs mx-auto'>
      <h1 className='text-center font-semibold border-b-2 border-red-400 w-28 mx-auto text-lg'>
        Signup Form
      </h1>
      <form
        onSubmit={submitHandler}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto mt-10'
      >
        <div className='mb-4'>
          <label htmlFor='email'>Email Id</label>
          <br />
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <br />
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='w-full'>
          <button
            className='bg-slate-950 text-slate-50 py-2 px-5 rounded'
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign Up'}
          </button>
        </div>
        <p>
        If you are Email is Already signin in, go to{' '}
        <Link to="/signin" className='text-blue-500'>Signin</Link> .
      </p>
      </form>
    </div>
  );
};

export default Signup;
