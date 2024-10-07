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
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  addToCart: (product: Product) => void;
	decrementFromCart: (ProductId : number) => void;
  removeFromCart: (productId: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
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


export interface ProductDisplayProps {
  product: Product;
  handleAuthCheck: (callback: () => void) => void;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  hasPartialAccess: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  setPartialAccess: () => void;
}

export interface IconProps {
  iconName: string;
  fill?: string;
  width?: string;
  height?: string;
  color?: string;
}
