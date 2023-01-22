import classNames from 'classnames';
import React, { useContext } from 'react';
import { MainContext } from '../../context';
import styles from './Cart.module.css';
function Cart() {
   const { handleBasketShow, order } = useContext(MainContext);

   const quantity = order.length;
   return (
      <div
         onClick={handleBasketShow}
         className={classNames(styles.cart, 'red accent-2 white-text')}
      >
         <i className='material-icons'>add_shopping_cart</i>
         {quantity ? <span className={styles.quantity}>{quantity}</span> : null}
      </div>
   );
}

export default Cart;
