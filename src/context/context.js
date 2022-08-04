import React, { useContext, useReducer, useEffect } from "react";
import Checkout from "../data";
import reducer from "../reducers/reducer";


const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: Checkout,
  total: 0,
  amount: 0,
  amount2:0,
  amount3:0,
  //path:{},
  cartItems: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };



  const getpath = (path,id) => {
    dispatch({ type: "GET_PATH", payload: {path,id} });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const increasei = (id1) => {
    dispatch({ type: "INCREASEI", payload: id1 });
  };
  const decreased = (id1) => {
    dispatch({ type: "DECREASED", payload: id1 });
  };

  const toggleAmount = (id, type) => {
   // console.log("Heloooo",id, type);
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id,type } });
  };

  const increase2 = (id, val) => {
    // console.log("Heloooo",id, type);
     dispatch({ type: "TOGGLE_AMOUNT", payload: { id,val } });
   };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        cartItems: state.cartItems,
        addToCart,
        clearCart,
        remove,
        increase,
        decrease,
        increasei,
        decreased,
        //getdata,
        increase2,
        getpath,
        toggleAmount,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
