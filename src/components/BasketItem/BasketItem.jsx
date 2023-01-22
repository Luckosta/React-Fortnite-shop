import classNames from 'classnames';
import { useContext } from 'react';
import { MainContext } from '../../context';

import styles from './BasketItem.module.css';

function BasketItem(props) {
   const { id, name, quantity, price } = props;

   const { removeFromBasket, plusQuantity, minusQuantity } =
      useContext(MainContext);

   return (
      <li className={classNames(styles.container, 'collection-item')}>
         <b>{name}</b>
         <span>Quantity: {quantity}</span>
         <span className={styles.section}>
            <span>Price: {price * quantity}</span>
            <button
               onClick={() => plusQuantity(id)}
               className={classNames(styles.plus, styles.btn, 'btn')}
            >
               +
            </button>
            <button
               onClick={() => minusQuantity(id)}
               className={classNames(styles.minus, styles.btn, 'btn')}
            >
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
