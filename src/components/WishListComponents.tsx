import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, WishlistItem } from "../utilies/type/Types";
import { ACTIONS } from "../enums/Actions";
import { VARIANTS } from "../enums/variants";
import Button from "../components/storyComponents/Button";

interface WishListProps {
  item: WishlistItem;
}

const WishlistComponents = ({ item }: WishListProps) => {
  const { dispatch } = useContext(ProductContext) as ProductContextType;

  return (
    <li key={item.id}>
      <div className="h-30 flex items-center justify-between border-b py-2">
        <div className="flex items-center space-x-4">
          <img
            src={`${item.image}`}
            alt={item.name}
            className="w-20 h-20 object-cover"
          />
          <div>
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        </div>
        <div>
          <Button
            onClick={() =>
              dispatch({ type: ACTIONS.REMOVE_FROM_WISHLIST, payload: item.id })
            }
            variant={VARIANTS.DANGER}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
};

export default WishlistComponents;
