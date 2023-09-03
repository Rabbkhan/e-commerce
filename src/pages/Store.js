import React from "react";

const Store = () => {
  return (
    <>
      <div className="text-center mx-9 my-32 ">
        <h1 className="m-10 text-slate-950 font-extrabold ">Music</h1>
        <section className="lg:flex lg:flex-wrap ">
          <div className="px-20">
            <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">Album1</h1>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                src="https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between py-3 max-w-xs ">
              <h1 className="font-extrabold">$12.99</h1>
              <button className="bg-slate-950 text-slate-100  py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="px-20 ">
            <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">Album2</h1>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                src="https://static-cse.canva.com/blob/1129948/1600w-fxYFTKLArdY.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between py-3 items-center max-w-xs">
              <h1 className="font-extrabold">$13.99</h1>
              <button className="bg-slate-950 text-slate-100  py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="px-20 ">
            <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">Album3</h1>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                src="https://i.pinimg.com/736x/e6/89/57/e689571b27f3068b993164655d48e29d--graphic-wallpaper-music-albums.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between py-3 items-center max-w-xs">
              <h1 className="font-extrabold">$10.99</h1>
              <button className="bg-slate-950 text-slate-100  py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500">
                Add To Cart
              </button>
            </div>
          </div>
            
          <div className="px-20 ">
            <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">Album4</h1>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                src="https://cdn.pixabay.com/photo/2017/12/06/20/51/cd-cover-3002651_640.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between py-3 items-center max-w-xs">
              <h1 className="font-extrabold">$10.99</h1>
              <button className="bg-slate-950 text-slate-100  py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500">
                Add To Cart
              </button>
            </div>
          </div>
            
          <div className="px-20 ">
            <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">Album5</h1>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                src="https://cdn.pixabay.com/photo/2017/12/02/16/27/cd-cover-2993240_640.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between py-3 items-center max-w-xs">
              <h1 className="font-extrabold">$10.99</h1>
              <button className="bg-slate-950 text-slate-100  py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="px-20 ">
            <h1 className="text-slate-950 font-extrabold my-5 max-w-xs">Album6</h1>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                src="https://cdn.pixabay.com/photo/2018/02/10/21/21/darkness-3144595_640.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between py-3 items-center max-w-xs">
              <h1 className="font-extrabold">$10.99</h1>
              <button className="bg-slate-950 text-slate-100  py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500">
                Add To Cart
              </button>
            </div>
          </div>
        </section>
          <div className="bg-slate-950 text-slate-100   font-semibold  transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500 py-3 px-4 rounded-md flex items-center justify-center w-40 text-center my-5 mx-auto">
          <button className="">See The Cart</button>
          </div>

        {/* MERCH */}

       
      </div>
    </>
  );
};

export default Store;
