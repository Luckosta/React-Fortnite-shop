import styles from './Main.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import GoodsList from '../../components/GoodsList/GoodsList';
import Preloader from '../../components/Preloader/Preloader';
import Cart from '../../components/Cart/Cart';

function Main() {
   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true);
   const [order, setOrder] = useState([]);

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

   return (
      <main className={cn(styles.content, 'container content')}>
         <Cart quantity={order.length} />
         {loading ? (
            <Preloader />
         ) : (
            <GoodsList goods={goods} addToBasket={addToBasket} />
         )}
      </main>
   );
}

export default Main;
