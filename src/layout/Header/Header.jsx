import classNames from 'classnames';
import styles from './Header.module.css';

function Header() {
   return (
      <div className={styles}>
         <nav>
            <div className='nav-wrapper'>
               <a
                  href='#'
                  className={classNames(styles.logo, 'brand-logo center')}
               >
                  React Movies
               </a>
            </div>
         </nav>
      </div>
   );
}

export default Header;
