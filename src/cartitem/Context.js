import { createContext, useReducer, useContext, useEffect } from 'react';
import { cartReducer } from './reducer';

export const Cart = createContext();

const Context = ({ children }) => {
  // Define an array of 6 static product data
  const products = [
    {
      id: 1,
      name: 'Blue Eyes',
      price: 10.99,
      image: 'https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg',
      inStock: 5,
      fastDelivery: true,
    },
    {
      id: 2,
      name: 'Karma',
      price: 19.99,
      image: 'https://static-cse.canva.com/blob/1129948/1600w-fxYFTKLArdY.jpg',
      inStock: 3,
      fastDelivery: false,
    },
    {
      id: 3,
      name: 'Kalastar',
      price: 29.99,
      image: 'https://i.pinimg.com/736x/e6/89/57/e689571b27f3068b993164655d48e29d--graphic-wallpaper-music-albums.jpg',
      inStock: 8,
      fastDelivery: true,
    },
    {
      id: 4,
      name: 'Looser',
      price: 14.99,
      image: 'https://cdn.pixabay.com/photo/2017/12/06/20/51/cd-cover-3002651_640.jpg',
      inStock: 2,
      fastDelivery: false,
    },
    {
      id: 5,
      name: 'Kahani suno',
      price: 22.99,
      image: 'https://cdn.pixabay.com/photo/2017/12/02/16/27/cd-cover-2993240_640.jpg',
      inStock: 6,
      fastDelivery: true,
    },
    {
      id: 6,
      name: 'batamiz dil',
      price: 15.99,
      image: 'https://cdn.pixabay.com/photo/2018/02/10/21/21/darkness-3144595_640.jpg',
      inStock: 0,
      fastDelivery: false,
    },
  ];

  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: initialCart,
  });

  
  useEffect(() => {
    localStorage.setItem('cart',
    
    JSON.stringify(state.cart));
  }, [state.cart]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
