import React from "react";

const Store = () => {
  const productsArr = [

    {
    id:1,
    title: 'Album1',
    price: 12.99,
    imageUrl: 'https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg',
    },
    {
    id:2,
    title: 'Album2',
    price: 12.99,
    imageUrl: 'https://static-cse.canva.com/blob/1129948/1600w-fxYFTKLArdY.jpg',
    },
    {
    id:3,
    title: 'Album3',
    price: 12.99,
    imageUrl: 'https://i.pinimg.com/736x/e6/89/57/e689571b27f3068b993164655d48e29d--graphic-wallpaper-music-albums.jpg',
    },
    {
    id:4,
    title: 'Album4',
    price: 12.99,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/12/06/20/51/cd-cover-3002651_640.jpg',
    },
    {
    id:5,
    title: 'Album5',
    price: 12.99,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/12/02/16/27/cd-cover-2993240_640.jpg',
    },
    {
    id:6,
    title: 'Album5',
    price: 12.99,
    imageUrl: 'https://cdn.pixabay.com/photo/2018/02/10/21/21/darkness-3144595_640.jpg',
    },
    ]
    
  return (
    <>
      <div className="text-center mx-9 my-32 ">
        <h1 className="m-10 text-slate-950 font-extrabold ">Music</h1>
        <section className="lg:flex lg:flex-wrap ">
          {productsArr.map((product)=>(
          <div className="px-20 ">
            <h1 className="text-slate-950 font-extrabold my-5 max-w-xs" key={product.id}>{product.title}</h1>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-100 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
                src={product.imageUrl}
                alt=""
                />
            </div>
            <div className="flex justify-between py-3 items-center max-w-xs">
              <h1 className="font-extrabold">$10.99</h1>
              <button className="bg-slate-950 text-slate-100  py-2 px-3 font-semibold rounded-md transition hover:translate-y-1 hover:scale-110 hover:bg-slate-50 hover:text-slate-950 duration-300 shadow-md shadow-slate-500 max-w">
                Add To Cart
              </button>
            </div>
          </div>
              ))}
        </section>
          <div className="bg-slate-950 text-slate-50 py-3 px-4 rounded-md flex items-center justify-center w-40 text-center my-5 mx-auto">
          <button className="">See The Cart</button>
          </div>

        {/* MERCH */}

       
      </div>
    </>
  );
};

export default Store;
