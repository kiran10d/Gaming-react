import React from 'react';
import { SideNavItems } from './SideNavItems';
import styles from './SideNav.module.scss';
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      {SideNavItems.map((item, index) => (
        <div key={index}>
          <Link to={item.path ? item.path : '#'}>
            <h3>{item.name}</h3>
          </Link>

          <div>
            {item.childeren.length > 0
              ? item.childeren.map((child, index) => (
                  <div
                    key={index}
                    className={`d-flex align-items-center gap-3 ${styles.childeren}`}
                  >
                    <i>{child.icon}</i>
                    <h6>{child.name}</h6>
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}
