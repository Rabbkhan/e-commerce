import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { CartState } from "../cartitem/Context";
// import CartModal from '../Cart/CartModal';
// import Data from '../data'

const Herosection = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/signin");
    
  };
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const authCtx = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  
  const key = localStorage.getItem("email");
  const total = cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0);

  return (
    <>
      <nav className="bg-slate-950 text-slate-300 fixed z-10 top-0 p-4  flex justify-between w-full">
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-products/512/6_Google_Play_Music_Google_Product_Logo_Brand-512.png"
          className="w-16"
          alt=""
        />
        <ul className="text-center m-auto  md:flex justify-center gap-20 cursor-pointer hidden ">
          <li className=" my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
            <Link to={"store"}>Store</Link>
          </li>
          <li className=" my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
            <Link to={"about"}>About</Link>
          </li>

          <li className=" my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
            <Link to={"contact"}>contact</Link>
          </li>

         
          {/* <li className=' my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6'><Link to={"signup"}>Signup</Link></li> */}

          {authCtx.isLoggedIn && (<li className="my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-20 text-red-600">{key}</li>)}
          {authCtx.isLoggedIn ? (
            <li
              className=" my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6"
              onClick={logoutHandler}
            >
              {" "}
              <Link to="/">logout </Link>
            </li>
          ) : (
            <li className=" my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6">
              <Link to={"/signin"}>Signin</Link>
            </li>
          )}
        </ul>
        <button
          className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-5 hover:bg-slate-50 rounded shadow hover:shadow-lg outline-none focus:outline-none h-10 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 my-auto"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Cart <span>{cart.length}</span>
        </button>
        {showModal ? (
          <>
            <div className="flex justify-items-start overflow-x-hidden overflow-y-auto fixed inset-x-2 z-50 outline-none focus:outline-none">
              <div className="relative lg:left-1/3 lg:w-1/8 my-24 mx-auto">
                <div className="border-0 rounded shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl text-slate-950 font-semibold">
                      CART
                    </h3>
                    <button
                      className="border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black h-9 w-8 text-xl block bg-gray-400 text-center py-0 rounded">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <table className="min-w-full text-left text-sm font-light md:overflow-x-auto text-zinc-900">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-6">
                            ITEM
                          </th>
                          <th scope="col" className="px-6 py-4">
                            PRICE
                          </th>
                          <th scope="col" className="px-6 py-4">
                            QUANTITY
                          </th>
                        </tr>
                      </thead>
                      {cart.length > 0 ? (
                        <tbody>
                          {cart.map((prod) => (
                            <tr key={prod.id}>
                              <td className="whitespace-nowrap px-6 py-4 flex justify-between items-center">
                                <img
                                  src={prod.image}
                                  className="rounded-lg"
                                  width={100}
                                  alt=""
                                />
                                <h3 className="font-extrabold mx-4 my-1">
                                  {prod.title}
                                </h3>
                              </td>
                              <td className="whitespace-nowrap px-7 py-4 font-semibold">
                                ${prod.price}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <input
                                  type="text"
                                  value={prod.qty}
                                  className="w-14 border-2 border-indigo-600 mx-3 items-center px-3 font-extrabold text-sky-700 py-1"
                                  onChange={(e) =>
                                    dispatch({
                                      type: "CHANGE_CART_QTY",
                                      payload: {
                                        id: prod.id,
                                        qty: e.target.value,
                                      },
                                    })
                                  }
                                />

                                <button
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,
                                    })
                                  }
                                  type="submit"
                                  className="bg-red-700 px-2 py-2 text-slate-50 font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                                >
                                  REMOVE
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      ) : (
                        <span className="font-extrabold text-center mx-5 text-red-600">
                          Cart is empty
                        </span>
                      )}
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-4"></th>
                          <th scope="col" className="px-6 py-4"></th>
                          {cart.length > 0 && (
                            <th
                              scope="col"
                              className="px-9 py-2 flex gap-4 font-extrabold"
                            >
                              Total: ${Number(total).toFixed(2)}
                            </th>
                          )}
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    {cart.length>0 ?
                  (  <button
                      className="text-white bg-slate-900 active:bg-slate-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 hover:text-slate-50 duration-300"
                      type="button"
                      onClick={() => alert('Thank you for Your purchase')
                    
                    }
                    >
                      PURCHASE
                    </button>):
                    (
                      <button disabled>Add items to Cart</button>

                    )
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </nav>
    </>
  );
};

export default Herosection;
