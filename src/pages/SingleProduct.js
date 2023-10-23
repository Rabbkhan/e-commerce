import React from "react";
// import Data from '../data'
import { CartState } from "../cartitem/Context";
const Store = ({prod}) => {
  
const { state:{cart},
dispatch,} = 
CartState();
  return (
    <>
    

        {/* <h1 className="m-10 text-slate-950 font-extrabold ">Music</h1> */}
        <section className="lg:flex lg:flex-wrap ">
            <div className="px-20" key={prod.id}>
              <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">
                {prod.name}
              </h1>
              <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                  src={prod.image}
                  alt=""
                />
              </div>
              <div className="flex justify-between py-3 items-center max-w-xs">
                <h1 className="font-extrabold">${prod.price}</h1>

                {
                    cart.some(p=>p.id ===prod.id) ?
                  ( <button onClick={()=>{
                    dispatch({

                        type:'REMOVE_FROM_CART',
                        payload:prod,
                    })
                }} className="bg-red-600 text-slate-100 py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500 max-w">
                  Remove From Cart
                </button>)
                    :
               ( <button onClick={()=>{
                    dispatch({

                        type:'ADD_TO_CART',
                        payload:prod,
                    })
                }} disabled={!prod.inStock} className="bg-slate-950 text-slate-100 py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500 max-w">
                 {!prod.inStock ?"Out of Stock" :"Add to Cart"} 
                </button>)
                }
              </div>
            </div>
        </section>
       


        {/* MERCH */}
      {/* </div> */}
    </>
  );
};

export default Store;
