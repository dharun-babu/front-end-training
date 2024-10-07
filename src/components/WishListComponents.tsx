import { useContext } from 'react';
import { ProductContext} from '../contexts/ProductContext';
import Button from '../components/storyComponents/Button';
import { ProductContextType, WishlistItem } from '../utilies/type/Types';

interface Props {
  item: WishlistItem;
}

const WishlistComponents = ({ item } : Props) => {
  const { removeFromWishlist } = useContext(ProductContext) as ProductContextType;

  return (
    <li key={item.id}>
      <div className="h-30 flex items-center justify-between border-b py-2">
        <div className="flex items-center space-x-4">
          <img src={`${item.image}`} alt={item.name} className="w-20 h-20 object-cover" />
          <div>
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        </div>
        <div>
          <Button
            onClick={() => removeFromWishlist(item.id)}
						variant="danger"
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
};

export default WishlistComponents;
