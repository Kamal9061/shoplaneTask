import React from "react";
import { UserOutlined  , ShoppingCartOutlined , SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/GetCartData/cartSlice';
import "./header.scss";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Redirect to login page
    window.location.href = "/login";
  };

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);

  return (
    <div className="AppHeader">
      <div className="companyLogo">
       SHOP<span>LANE</span>
      </div>
      <div className="alignNotification">
          <div className="withsbr">
          <SearchOutlined />
                           </div>
          <div className="cart-item">
          <ShoppingCartOutlined />
            <span className="itemssquntiti">{totalQuantity}</span>
          </div>
          <div style={{cursor:"pointer"}} onClick={handleLogout}>
          <UserOutlined />
        </div>
        </div>
    </div>
  );
}

export default Header;
