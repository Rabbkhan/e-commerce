import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartModal from '../Cart/CartModal';
import AuthContext from '../store/auth-context';

const Herosection = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  // Conditional rendering of the header
  if (isLoggedIn) {
    return <CartModal />;
  }

  return (
    <>
      <nav className="bg-slate-950 text-slate-300 fixed z-10 top-0 p-4 flex justify-between w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kAGOsH_Ii8laBPk-udCuJ7DNHPoinI6d6w&usqp=CAU"
          className="w-16"
          alt=""
        />
        <ul className="text-center m-auto md:flex justify-center gap-20 cursor-pointer hidden">
          <li className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
            <NavLink to={'/about'}>About</NavLink>
          </li>
          {!isLoggedIn && (
            <li className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
              <NavLink to={'/signin'}>Signin</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
              <NavLink to={'/signup'}>Signup</NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
              <NavLink to={'/store'}>Store</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li
              className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6"
              onClick={logoutHandler}
            >
              Logout
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Herosection;
