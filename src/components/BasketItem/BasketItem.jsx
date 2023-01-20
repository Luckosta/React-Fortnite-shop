import classNames from 'classnames';
import React from 'react';
import styles from './BasketItem.module.css';

function BasketItem(props) {
   const {
      id,
      name,
      quantity,
      price,
      removeFromBasket = Function.prototype,
   } = props;

   return (
      <li className={classNames(styles.container, 'collection-item')}>
         <b>{name}</b>
         <span>Quantity: {quantity}</span>
         <span>Price: {price * quantity}</span>

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
