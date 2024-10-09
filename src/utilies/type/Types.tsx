import { BUTTON_SIZE } from "../../enums/ButtonSize";
import { BUTTON_STYLE } from "../../enums/ButtonStyle";
import { VARIANTS } from "../../enums/variants";

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
  dispatch: (action: ActionProps) => void;
}

export interface QuantityControl {
  product: Product;
  initialCount: number;
}

export interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export interface ButtonProps {
  type?: BUTTON_STYLE.BUTTON | BUTTON_STYLE.SUBMIT | BUTTON_STYLE.RESET;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: VARIANTS.PRIMARY | VARIANTS.SECONDARY | VARIANTS.DANGER | VARIANTS.SUCCESS | VARIANTS.NO_STYLE;
  size?: BUTTON_SIZE.SM | BUTTON_SIZE.MD;
}

export interface ProductDisplayProps {
  product: Product;
  handleAuthCheck: (callback: () => void) => void;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  hasPartialAccess: boolean;
  dispatch: (action : ActionProps) => void
}

export interface IconProps {
  iconName: string;
  fill?: string;
  width?: string;
  height?: string;
  color?: string;
}

export interface ProductState {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
}

export interface ActionProps {
  type: string;
  payload?: any;
}

export interface UserType {
  email: string;
  password: string;
}

export interface NoItemsComponentProps {
  iconName: string;
  message: string;
}
