import React from 'react';
import { NavLink } from 'react-router-dom';

import { logMessage } from '@components/logMessage';
import styles from './style.module.css';

function Header() {
  const [isNavOpen, setNavOpen] = React.useState(false);
  const toggleNav = () => setNavOpen((isNavOpen) => !isNavOpen);

  return (
    <header className={styles.primaryHeader}>
      <div className='container'>
        <div className={styles.primaryHeaderInner}>
          <NavLink to='/'>Q Agency</NavLink>
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
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    [styles.primaryNavigationLink, isActive ? styles.active : ''].join(' ')
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/posts'
                  className={({ isActive }) =>
                    [styles.primaryNavigationLink, isActive ? styles.active : ''].join(' ')
                  }
                >
                  Posts
                </NavLink>
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
