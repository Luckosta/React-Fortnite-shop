import styles from './Main.module.css';
import cn from 'classnames';
import { useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import GoodsList from '../../components/GoodsList/GoodsList';
import Preloader from '../../components/Preloader/Preloader';
import Cart from '../../components/Cart/Cart';
import BasketList from '../../components/BasketList/BasketList';
import Alert from '../../components/Alert/Alert';
import { useContext } from 'react';
import { MainContext } from '../../context';

function Main() {
   const { loading, order, isBasketShow, alertName, setGoods } =
      useContext(MainContext);

   const fetchGoods = async () => {
      const response = await fetch(API_URL, {
         headers: {
            Authorization: API_KEY,
         },
      });

      const data = await response.json();
      data.featured && setGoods(data.featured);
   };

   useEffect(() => {
      fetchGoods();

      //eslint-disable-next-line
   }, []);

   return (
      <main className={cn(styles.content, 'container content')}>
         <Cart />
         {loading ? <Preloader /> : <GoodsList />}
         {isBasketShow && <BasketList />}

         {alertName && <Alert name={alertName} />}
      </main>
   );
}

export default Main;
