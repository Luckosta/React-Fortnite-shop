import classNames from 'classnames';
import React from 'react';
import styles from './Cart.module.css';
function Cart(props) {
   const {
      quantity = 0,
      handleBasketShow = Function.prototype,
      removeFromBasket = Function.prototype,
   } = props;
   return (
      <div
         onClick={handleBasketShow}
         className={classNames(styles.cart, 'red accent-2 white-text')}
      >
         <i className='material-icons'>
            add_shopping_cart
         </i>
         {quantity ? <span className={styles.quantity}>{quantity}</span> : null}
      </div>
   );
}

export default Cart;