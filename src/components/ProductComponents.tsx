import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Button from '../components/storyComponents/Button';

const ProductDisplay = ({ product }: { product: any }) => {
  const { addToCart, addToWishlist } = useContext(ProductContext) as any;

  return (
    <li className=" bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-full ">
			<img
        src={`${product.image}`}
        alt={product.name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-xl mb-2">{product.name}</h2>
        <p className="text-gray-700 text-base mb-4">${product.price}</p>
        <div className="flex justify-between">
          <Button
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add to Cart
          </Button>
          <Button
            onClick={() => addToWishlist(product)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add to Wishlist
          </Button>
        </div>
      </div>
			</div>
    </li>
  );
};

export default ProductDisplay;
