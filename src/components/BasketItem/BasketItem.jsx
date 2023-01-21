import classNames from 'classnames';
import React, { useReducer } from 'react';
import styles from './BasketItem.module.css';

function BasketItem(props) {
   const {
      id,
      name,
      quantity,
      price,
      removeFromBasket = Function.prototype,
      pluseQuantity = Function.prototype,
      minusQuantity = Function.prototype,
   } = props;

   return (
      <li className={classNames(styles.container, 'collection-item')}>
         <b>{name}</b>
         <span>Quantity: {quantity}</span>
         <span className={styles.section}>
            <span>Price: {price * quantity}</span>
            <button onClick={()=>pluseQuantity(id)} className={classNames(styles.plus, styles.btn, 'btn')}>
               +
            </button>
            <button onClick={()=>minusQuantity(id)} className={classNames(styles.minus, styles.btn, 'btn')}>
               -
            </button>
         </span>
         <i
            onClick={() => removeFromBasket(id)}
            className={classNames(styles.icon, 'material-icons right')}
         >
            close
         </i>
      </li>
   );
}

export default BasketItem;
