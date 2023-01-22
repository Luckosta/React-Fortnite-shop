import classNames from 'classnames';
import styles from './Header.module.css';

function Header() {
   return (
         <nav>
            <div className='nav-wrapper'>
               <a
                  href='https://github.com/Luckosta/React-Fortnite-shop'
                  className={classNames(styles.logo, 'brand-logo center')}
						target='_blank' rel="noreferrer"
               >
                  React Fortnite Shop
               </a>
            </div>
         </nav>
   );
}

export default Header;
