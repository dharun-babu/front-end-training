import React, { createContext, useReducer } from 'react';
import { ProductContextType, ProductState } from '../utilies/type/Types';
import CommonReducer from '../reducer/ProductReducer';

const initialState : ProductState = {
  cartItems: [] ,
  wishlistItems: [],
};

export const ProductContext = createContext<ProductContextType>({
  cartItems: [],
  wishlistItems: [],
	dispatch: () => {}
});

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [CommonState, dispatch] = useReducer(CommonReducer, initialState);

  const value: ProductContextType = {
    cartItems: CommonState.cartItems,
    wishlistItems: CommonState.wishlistItems,
		dispatch
  };
	
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
