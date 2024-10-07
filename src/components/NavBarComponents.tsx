import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/NavItemsData';
import { ProductContext } from '../contexts/ProductContext';
import { ProductContextType } from '../utilies/type/Types';

const NavBarComponents = () => {
  const { cartItems, wishlistItems } = useContext(ProductContext) as ProductContextType;

  return (
    <nav className="h-16 fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-blue-500 text-white p-4">
      <div className="text-xl font-bold">DB Mart</div>
      <ul className="flex space-x-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>
              {item.text}
              {(item.text === 'Cart' && cartItems.length > 0) ||
              (item.text === 'Wishlist' && wishlistItems.length > 0) ? (
                <span className="ml-1 text-md text-white rounded-full bg-red-500 px-2">
                  {item.text === 'Cart' ? cartItems.length : wishlistItems.length}
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
