import styles from './Main.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import GoodsList from '../../components/GoodsList/GoodsList';
import Preloader from '../../components/Preloader/Preloader';
import Cart from '../../components/Cart/Cart';
import BasketList from '../../components/BasketList/BasketList';
import Alert from '../../components/Alert/Alert';

function Main() {
   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true);
   const [order, setOrder] = useState([]);
   const [isBasketShow, setIsBaskeShow] = useState(false);
   const [alertName, setAlertName] = useState('');

   const pluseQuantity = (itemId) => {
      setOrder(
         order.map((item) => {
            if (item.id === itemId) {
               const newQuantity = item.quantity + 1;
               return {
                  ...item,
                  quantity: newQuantity,
               };
            } else return item;
         })
      );
   };
   const minusQuantity = (itemId) => {
      setOrder(
         order.map((item) => {
            if (item.id === itemId) {
               if (item.quantity > 0) {
                  const newQuantity = item.quantity - 1;
                  return {
                     ...item,
                     quantity: newQuantity,
                  };
               } else return item;
            } else return item;
         })
      );
   };

   const removeFromBasket = (itemId) => {
      const newOrder = order.filter((item) => item.id !== itemId);
      setOrder(newOrder);
   };

   const addToBasket = (item) => {
      const itemIndex = order.findIndex((element) => element.id === item.id);
      if (itemIndex < 0) {
         const newItem = {
            ...item,
            quantity: 1,
         };
         setOrder([...order, newItem]);
      } else {
         const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
               return {
                  ...orderItem,
                  quantity: orderItem.quantity + 1,
               };
            } else {
               return orderItem;
            }
         });
         setOrder(newOrder);
      }

		setAlertName(item.name);
   };

   const handleBasketShow = () => {
      setIsBaskeShow(!isBasketShow);
   };

   const fetchGoods = async () => {
      const response = await fetch(API_URL, {
         headers: {
            Authorization: API_KEY,
         },
      });

      const data = await response.json();
      data.featured && setGoods(data.featured);
      setLoading(false);
   };

   useEffect(() => {
      fetchGoods();
   }, []);

   const closeAlert = () => {
      setAlertName('');
   };

   return (
      <main className={cn(styles.content, 'container content')}>
         <Cart handleBasketShow={handleBasketShow} quantity={order.length} />
         {loading ? (
            <Preloader />
         ) : (
            <GoodsList goods={goods} addToBasket={addToBasket} />
         )}
         {isBasketShow && (
            <BasketList
               minusQuantity={minusQuantity}
               pluseQuantity={pluseQuantity}
               removeFromBasket={removeFromBasket}
               handleBasketShow={handleBasketShow}
               order={order}
            />
         )}

         {alertName && <Alert name={alertName} closeAlert={closeAlert} handleBasketShow={handleBasketShow}/>}
      </main>
   );
}

export default Main;