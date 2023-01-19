import React from 'react';
import Good from '../Good/Good';
import styles from './Goods.module.css';
function Goods({ goods }) {
   return (
      <div className={styles.container}>
         {goods.map((good) => (
            <Good key={good.id} {...good} />
         ))}
      </div>
   );
}

export default Goods;
