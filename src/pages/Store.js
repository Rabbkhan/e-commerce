import React from "react";
// import Data from '../data'
import { CartState } from "../cartitem/Context";
import SingleProduct from './SingleProduct'
const Store = () => {
  
const { state:{products}} = CartState();
console.log(products);
  return (
    <>
   
         <div className="text-center mx-auto my-28">
         <h1 className="mx-8 text-slate-950 font-extrabold ">Most Popular Songs Collection</h1>

          </div>
         <div className="text-center mx-9 my-32 flex flex-wrap">

     {
       products.map((prod) => {
         return <SingleProduct prod={prod} key={prod.id}/>
        })
      }
      <div className="bg-slate-950 text-slate-50 py-3 px-4 rounded-md flex items-center justify-center w-40 text-center my-5 mx-auto">
          <button className="">See The Cart</button>
        </div>
      
      </div>
      {/* <div className="text-center mx-9 my-32 ">
        <h1 className="m-10 text-slate-950 font-extrabold ">Music</h1>
        <section className="lg:flex lg:flex-wrap ">
          {products.map((product) => (
            <div className="px-20" key={product.id}>
              <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">
                {product.name}
              </h1>
              <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="flex justify-between py-3 items-center max-w-xs">
                <h1 className="font-extrabold">${product.price}</h1>
                <button disabled={!product.inStock} className="bg-slate-950 text-slate-100 py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500 max-w">
                 {!product.inStock ?"Out of Stock" :"Add to Cart"} 
                </button>
                <button className="bg-red-600 text-slate-100 py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500 max-w">
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
        </section>
        <div className="bg-slate-950 text-slate-50 py-3 px-4 rounded-md flex items-center justify-center w-40 text-center my-5 mx-auto">
          <button className="">See The Cart</button>
        </div>

      </div> */}
    </>
  );
};

export default Store;
