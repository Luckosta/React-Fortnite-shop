import React from 'react';
import Good from '../Good/Good';
import styles from './GoodsList.module.css';
function GoodsList(props) {
   const { goods = [], addToBasket =Function.prototype } = props;

   if (!goods.length) {
      return <h3>Nothing here</h3>;
   }

   return (
      <div className={styles.container}>
		{/* Removing duplicate in reduce*/}
         {goods
            .reduce((acc, item) => {
               const i = acc.findIndex((m) => m.id === item.id);
               if (!~i || !acc[i].checked) {
                  acc.push(item);
                  if (~i) {
                     acc.splice(i, 1);
                  }
               }
               return acc;
            }, [])
            .map((good) => (
               <Good addToBasket={addToBasket} key={good.id} {...good} />
            ))}
      </div>
   );
}

export default GoodsList;
