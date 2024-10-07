import React, { createContext, useState } from 'react';
import { Product, CartItem, WishlistItem, ProductContextType } from '../utilies/type/Types';

const defaultProductContext: ProductContextType = {
  cartItems: [],
  wishlistItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decrementFromCart: () => {},
  addToWishlist: () => {},
  removeFromWishlist: () => {},
};

export const ProductContext = createContext<ProductContextType>(defaultProductContext);

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const addToCart = (product: Product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      setCartItems((prevItems) =>
        prevItems.map((item, index) =>
          index === existingIndex
            ? { ...item, count: item.count + 1, total: item.total + product.price }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, count: 1, total: product.price }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const decrementFromCart = (productId: number) => {
    const existingIndex = cartItems.findIndex((item) => item.id === productId);
    if (existingIndex !== -1) {
      const currentItem = cartItems[existingIndex];
      if (currentItem.count > 1) {
        setCartItems((prevItems) =>
          prevItems.map((item, index) =>
            index === existingIndex
              ? { ...item, count: item.count - 1, total: item.total - currentItem.price }
              : item
          )
        );
      } else {
        removeFromCart(productId);
      }
    }
  };

  const addToWishlist = (product: Product) => {
		const isInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (! isInWishlist) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const value: ProductContextType = {
		cartItems,
		wishlistItems,
    addToCart,
    removeFromCart,
    decrementFromCart,
    addToWishlist,
    removeFromWishlist
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
