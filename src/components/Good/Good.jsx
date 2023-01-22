import classNames from 'classnames';
import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../context';
import styles from './Good.module.css';

function Good(props) {
   const { id, name, price, description, full_background } = props;

   const { addToBasket } = useContext(MainContext);

   return (
      <div className={classNames(styles.card, 'card')}>
         <div className='card-image waves-effect waves-block waves-light'>
            <img alt={name} className='activator' src={full_background} />
         </div>
         <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4'>
               {name}
            </span>
            <p>{description}</p>
         </div>
         <div className={classNames(styles.cardBottom, 'card-action')}>
            <button
               onClick={() => addToBasket({ id, name, price })}
               className={classNames(styles.btn, 'btn')}
            >
               Buy
            </button>
            <span className={classNames(styles.price, 'right white-text')}>
               {price} VB
            </span>
         </div>
      </div>
   );
}

export default Good;
