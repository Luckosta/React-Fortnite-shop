import React, { useEffect } from 'react';
import styles from './Alert.module.css';



function Alert(props) {
   const {
      name = '',
      closeAlert = Function.prototype,
      handleBasketShow = Function.prototype,
   } = props;

   useEffect(() => {
      const timerId = setTimeout(closeAlert, 3000);

      return () => {
         clearTimeout(timerId);
      };
      //eslint-disable-next-line
   }, [name]);

   return (
      <div className={styles.alert} id='toast-container'>
         <div
            onClick={handleBasketShow}
            className='toast'
            style={{ cursor: 'pointer' }}
         >
            {name} added to cart
         </div>
      </div>
   );
}

export default Alert;
