import { ACTIONS } from '../enums/Actions';
import { ActionProps, ProductState } from '../utilies/type/Types';

const CommonReducer = (state: ProductState, {type, payload}: ActionProps): ProductState => {
  switch (type) {
    case ACTIONS.ADD_TO_CART: {
      const existingItem = state.cartItems.find((item) => item.id === payload.id);
      const updatedCartItems = existingItem
        ? state.cartItems.map((item) =>
            item.id === payload.id
              ? { ...item, count: item.count + 1, total: item.total + payload.price }
              : item
          ) : [...state.cartItems, { ...payload, count: 1, total: payload.price }];

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case ACTIONS.ADD_TO_WISHLIST: {
      const existingWishlistItem = state.wishlistItems.find((item) => item.id === payload.id);
      const updatedWishlistItems = existingWishlistItem
        ? state.wishlistItems
        : [...state.wishlistItems, payload];

      return {
        ...state,
        wishlistItems: updatedWishlistItems,
      };
    }

    case ACTIONS.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };
    }

    case ACTIONS.REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((item) => item.id !== payload),
      };
    }

    case ACTIONS.DECREMENT_ITEM_COUNT: {
			const existingItem = state.cartItems.find((item) => item.id === payload);
			if (existingItem && existingItem.count > 1) {
				const updatedCartItems = state.cartItems.map((item) =>
					item.id === payload
						? { ...item, count: item.count - 1, total: item.total - item.price }
						: item
				);
				return {
					...state,
					cartItems: updatedCartItems,
				};
			}
			return {
				...state,
			cartItems: state.cartItems.filter((item) => item.id !== payload),
			};
		}
		
    default:
      return state;
  }
};

export default CommonReducer;
