import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDX43zQVaf3t-Hb9Gqap_JUSumjpZmNPcM',
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
        // Assuming a successful login, set user information in the context
        const data = await response.json();
        authCtx.login(data.idToken, data.localId);
       
        navigate('/'); 
      } else {
        // Handle the error case, if needed
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle any errors from the API request
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-28 w-full max-w-xs mx-auto'>
      <h1 className='text-center font-semibold border-b-2 border-red-400 w-28 mx-auto text-lg'>
        Signin Form
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
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </div>
        <p>
          If you are not logged in, go to{' '}
          <Link to='/signup' className='text-slate-950'>
            Signup
          </Link>{' '}
          first.
        </p>
      </form>
    </div>
  );
};

export default Signin;
