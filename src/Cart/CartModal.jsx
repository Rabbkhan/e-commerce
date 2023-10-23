import React, { useState } from "react";
import Data from '../data'

const CartModal = ()=>{
    const [showModal, setShowModal] = useState(false);

  return (
    <>
<button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-5 hover:bg-slate-50 rounded shadow hover:shadow-lg outline-none focus:outline-none h-10 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 my-auto"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Cart 0
      </button>
      {showModal ? (
        <>
         
         <div className="flex justify-items-start overflow-x-hidden overflow-y-auto fixed inset-x-2 z-50 outline-none focus:outline-none">
  <div className="relative lg:left-1/3 lg:w-1/8 my-24 mx-auto">
    <div className="border-0 rounded shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
        <h3 className="text-3xl text-slate-950 font-semibold">CART</h3>
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
          <tbody>
            {Data.map((product) => (
              <tr key={product.id}>
                <td className="whitespace-nowrap px-6 py-4 flex justify-between items-center">
                  <img
                    src={product.imageUrl}
                    className="rounded-lg"
                    width={100}
                    alt=""
                  />
                  <h3 className="font-extrabold mx-4 my-1">{product.title}</h3>
                </td>
                <td className="whitespace-nowrap px-7 py-4 font-semibold">
                  ${product.price}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <input
                    type="text"
                    value={product.quantity}
                    className="w-10 border-2 border-indigo-600 mx-3 items-center px-3 font-extrabold text-sky-700 py-1"
                  />
                  <button
                    type="submit"
                    className="bg-red-700 px-2 py-2 text-slate-50 font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    REMOVE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th scope="col" className="px-6 py-4"></th>
              <th scope="col" className="px-6 py-4"></th>
              <th scope="col" className="px-9 py-2 flex gap-4 font-extrabold">
                Total<div>$12.99</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-white bg-slate-900 active:bg-slate-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 hover:text-slate-50 duration-300"
          type="button"
          onClick={() => setShowModal(false)}
        >
          PURCHASE
        </button>
      </div>
    </div>
  </div>
</div>

         
                 </>
      ) : null}
      </>
  );
};

export default CartModal;
