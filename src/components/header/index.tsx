import React from 'react';
import { Link } from 'react-router-dom';
import { logMessage } from '@components/logMessage';
import styles from './header.module.css';

function Header() {
  const [isNavOpen, setNavOpen] = React.useState(false);
  const toggleNav = () => setNavOpen((navOpen) => !navOpen);

  return (
    <header className={styles.primaryHeader}>
      <div className='container'>
        <div className={styles.primaryHeaderInner}>
          <Link to='/'>Q Agency</Link>
          <button
            className={styles.mobileNavToggle}
            aria-expanded={isNavOpen}
            aria-controls='primary-navigation'
            onClick={toggleNav}
          >
            <span className='sr-only'>Menu</span>
            <i className={styles.hamburger} aria-hidden='true' />
          </button>
          <nav
            id='primary-navigation'
            aria-label='primary'
            className={styles.primaryNavigation}
            data-visible={isNavOpen}
          >
            <ul role='list' className={styles.primaryNavigationList}>
              <li>
                <Link to='/' className={styles.primaryNavigationLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/posts' className={styles.primaryNavigationLink}>
                  Posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const HeaderWithLog = logMessage(Header);

export { HeaderWithLog as Header };
