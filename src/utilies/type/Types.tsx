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
  calculateTotalPrice: () => void;
  calculateCartCount: () => number;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
	calculateWishlistCount: () => number;
}


export interface QuantityControl {
  productId: number;
  initialCount: number;
}

export interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'no-style' | string;
  size?: 'sm' | 'md';
}