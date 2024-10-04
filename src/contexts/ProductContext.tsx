import React, { createContext, useState, useMemo, useCallback } from 'react';
import { Products } from '../data/ProductsDate';
import { Product, CartItem, WishlistItem, ProductContextType } from '../utilies/type/Types';

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products] = useState<Product[]>(Products);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const addToCart = useCallback((product: Product) => {
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
  }, [cartItems]);

	const removeFromCart = useCallback((productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const decrementFromCart = useCallback((productId: number) => {
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
  }, [cartItems, removeFromCart]);

  const calculateTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.total + 10, 0);
  }, [cartItems]);

  const calculateCartCount = useCallback(() => {
    return cartItems.length;
  }, [cartItems]);

	const isInWishlist = useCallback((productId: number) => {
    return wishlistItems.some((item) => item.id === productId);
  }, [wishlistItems]);

  const addToWishlist = useCallback((product: Product) => {
    if (!isInWishlist(product.id)) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  }, [wishlistItems, isInWishlist]);

  const removeFromWishlist = useCallback((productId: number) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const calculateWishlistCount = useCallback(() => {
    return wishlistItems.length;
  }, [wishlistItems]);

  const value = useMemo(
    () => ({
      products,
      cartItems,
      wishlistItems,
      addToCart,
      decrementFromCart,
      removeFromCart,
      calculateTotalPrice,
      calculateCartCount: () => calculateCartCount(),
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      calculateWishlistCount: () => calculateWishlistCount(),
    }),
    [
      products,
      cartItems,
      wishlistItems,
      addToCart,
      decrementFromCart,
      removeFromCart,
      calculateTotalPrice,
      calculateCartCount,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      calculateWishlistCount,
    ]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
