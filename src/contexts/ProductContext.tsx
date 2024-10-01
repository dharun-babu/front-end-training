import React, { createContext, useState } from 'react';
import { Products } from '../data/ProductsDate';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  count: number;
  total: number;
}

export interface WishlistItem extends Product {}

export interface ProductContextType {
  products: Product[];
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  addToCart: (product: Product) => void;
	decrementFromCart: (ProductId : number) => void;
  removeFromCart: (productId: number) => void;
  calculateTotalPrice: () => number;
  calculateCartCount: () => number;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
	calculateWishlistCount: () => number;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(Products);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const addToCart = (product: Product) => {
		console.log(cartItems);
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex] = {
        ...updatedCartItems[existingIndex],
        count: updatedCartItems[existingIndex].count + 1,
        total: updatedCartItems[existingIndex].total + product.price,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, count: 1, total: product.price }]);
    }
  };

  const decrementFromCart = (productId: number) => {
    const existingIndex = cartItems.findIndex((item) => item.id === productId);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const currentItem = updatedCartItems[existingIndex];
      if (currentItem.count > 1) {
        updatedCartItems[existingIndex] = {
          ...currentItem,
          count: currentItem.count - 1,
          total: currentItem.total - currentItem.price,
        };
        setCartItems(updatedCartItems);
      } else {
        removeFromCart(productId);
      }
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

	const calculateCartCount = () => {
		return cartItems.length;
	};
	

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId: number) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== productId);
    setWishlistItems(updatedWishlistItems);
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.some((item) => item.id === productId);
  };

	const calculateWishlistCount = () => {
		return wishlistItems.length;
	};

  return (
    <ProductContext.Provider
      value={{
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
				calculateWishlistCount
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
