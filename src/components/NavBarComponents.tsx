import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/NavItemsData';
import { ProductContext, ProductContextType } from '../contexts/ProductContext';

const NavBarComponents = () => {
  const { calculateCartCount, calculateWishlistCount } = useContext(ProductContext) as ProductContextType;

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-blue-500 text-white p-4">
      <div className="text-xl font-bold">DB Mart</div>
      <ul className="flex space-x-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>
              {item.text}
              {(item.text === 'Cart' && calculateCartCount() > 0) ||
              (item.text === 'Wishlist' && calculateWishlistCount() > 0) ? (
                <span className="ml-1 text-sm text-gray-400">
                  {item.text === 'Cart' ? `(${calculateCartCount()})` : `(${calculateWishlistCount()})`}
                </span>
              ) : null}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarComponents;
