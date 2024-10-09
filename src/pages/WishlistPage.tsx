import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, WishlistItem } from "../utilies/type/Types";
import { ICONS } from "../enums/Icons";
import { EMPTY_WISHLIST } from "../constants/constants";
import WishlistComponents from "../components/WishListComponents";
import NoItemsComponent from "../components/NoItemsComponents";

const WishlistPage = () => {
  const { wishlistItems } = useContext(ProductContext) as ProductContextType;

  if (wishlistItems.length === 0) {
    return (
      <NoItemsComponent
        iconName={ICONS.ADD_WISHLIST}
        message={EMPTY_WISHLIST}
      />
    );
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
