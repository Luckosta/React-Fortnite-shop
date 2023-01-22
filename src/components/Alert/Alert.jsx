import React, { useEffect } from 'react';
import { useContext } from 'react';
import { MainContext } from '../../context';
import styles from './Alert.module.css';

function Alert() {
   const {
      alertName = '',
      closeAlert = Function.prototype,
      handleBasketShow = Function.prototype,
   } = useContext(MainContext);

   useEffect(() => {
      const timerId = setTimeout(closeAlert, 3000);

      return () => {
         clearTimeout(timerId);
      };
      //eslint-disable-next-line
   }, [alertName]);

   return (
      <div className={styles.alert} id='toast-container'>
         <div
            onClick={handleBasketShow}
            className='toast'
            style={{ cursor: 'pointer' }}
         >
            {alertName} added to cart
         </div>
      </div>
   );
}

export default Alert;
