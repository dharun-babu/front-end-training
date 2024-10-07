import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { ProductContextType, WishlistItem } from '../utilies/type/Types';
import WishlistComponents from '../components/WishListComponents';
import NoItemsComponent from '../components/NoItemsComponents';
import { EMPTY_WISHLIST } from '../constants/constants';

const WishlistPage = () => {
  const { wishlistItems } = useContext(ProductContext) as ProductContextType;

  if (wishlistItems.length === 0) {
    return <NoItemsComponent iconName='addwishlist' message={EMPTY_WISHLIST}/>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">WishList Page</h1>
      <ul>
        {wishlistItems.map((item: WishlistItem) => (
          <WishlistComponents key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
