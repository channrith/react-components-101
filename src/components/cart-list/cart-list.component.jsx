import React from 'react';

import { Cart } from '../cart/cart.component';

import './cart-list.styles.css';

export const CartList = (props) => (
  <div className='card-list'>
    {props.monsters.map((monster) => (
      <Cart key={monster.id} monster={monster} />
    ))}
  </div>
);
