import React, { useState } from 'react';
import styles from './Navbar.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      
      <div className={`${styles['navbarlinks']} ${isOpen ? styles.active : ''}`}>
     
        <ul>
        <div className={styles.navbarlogo}>
        <img src="logo.png" alt="Logo" />
       </div>
          <li><a href="./"><i class="bi bi-house-door-fill"></i> Home</a></li>
          <li><a href="./#NewUser"><i class="bi bi-people"></i> Register</a></li>
          <li><a href="./#NewTask"><i class="bi bi-list-task"></i> New Task</a></li>
          <li><a href="./#Dashboard"><i class="bi bi-table"></i> Dashboard</a></li>
        </ul>
      </div>
      <div className={styles.navbarsearch}>
        <h6>Sign in <i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i></h6>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className={styles.navbartoggle} onClick={toggleMenu}>
      <div className={`${styles.burger} ${isOpen ? styles.active : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
