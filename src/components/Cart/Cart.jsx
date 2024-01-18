import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';

import CartItem from '../CartItem/Cartitem';
import Form from '../Form/Form';

import formatCurrency from '../../utils/formatCurrency';

import './Cart.css';

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
      <Form/>
    </section>
  );
}

export default Cart;
