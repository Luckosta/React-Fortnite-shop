import styles from './Main.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import Goods from '../../components/Goods/Goods';

function Main() {
   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchGoods = async () => {
      const response = await fetch(API_URL, {
         headers: {
            "Authorization": API_KEY,
         },
      });
		
      const data = await response.json();

      setGoods(data.featured)
   };

   useEffect(() => {
      fetchGoods();
	
   }, []);

   return <main className={cn(styles.content, 'container content')}>
		<Goods goods={goods}/>
	</main>;
}

export default Main;
