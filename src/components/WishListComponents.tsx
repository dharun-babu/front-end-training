import { useContext } from 'react';
import { ProductContext} from '../contexts/ProductContext';
import Button from '../components/storyComponents/Button';
import { ProductContextType, WishlistItem } from '../utilies/Types';

interface Props {
  item: WishlistItem;
}

const WishlistComponents = ({ item } : Props) => {
  const { removeFromWishlist } = useContext(ProductContext) as ProductContextType;

  const handleRemoveFromWishlist = (productId: number) => {
    removeFromWishlist(productId);
  };

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
            onClick={() => handleRemoveFromWishlist(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
};

export default WishlistComponents;
