import classNames from 'classnames';
import BasketItem from '../BasketItem/BasketItem';
import styles from './BasketList.module.css';

function BasketList(props) {
   const {
      order = [],
      handleBasketShow = Function.prototype,
      removeFromBasket = Function.prototype,
      plusQuantity = Function.prototype,
      minusQuantity = Function.prototype,
   } = props;

   const totalPrice = order.reduce(
      (sum, el) => sum + el.price * el.quantity,
      0
   );
   return (
      <ul className={classNames(styles.basketList, 'collection')}>
         <li className='collection-item red accent-1 white-text'>
            BasketList
            <i
               onClick={handleBasketShow}
               className={classNames(styles.icon, 'material-icons right')}
            >
               close
            </i>
         </li>
         {order.length ? (
            order.map((item) => (
               <BasketItem
                  key={item.id}
                  pluseQuantity={plusQuantity}
                  minusQuantity={minusQuantity}
                  removeFromBasket={removeFromBasket}
                  {...item}
               />
            ))
         ) : (
            <li className='collection-item '>
               <b>Basket is empty</b>
            </li>
         )}
         <li className={classNames(styles.footer,'collection-item red accent-1 white-text')}>
            Total price: {totalPrice}
            <button className={classNames(styles.btn, 'secondary-content btn')}>
               Place an order
            </button>
         </li>
      </ul>
   );
}

export default BasketList;