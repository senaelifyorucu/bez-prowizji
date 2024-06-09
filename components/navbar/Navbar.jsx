'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const threshold = 210; // Adjust this value as needed

  const handleScroll = () => {
    if (window.scrollY <= threshold) {
      setIsVisible(true);
    } else if (window.scrollY > lastScrollY) {
      // Scroll Down
      setIsVisible(false);
    } else {
      // Scroll Up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const isActive = (path) => pathname === path;
  const paths = [
    { path: '/nieruchomosci', name: 'Nieruchomości' },
    { path: '/warszawa-dawniej-i-dzis', name: 'Warszawa Dawniej i Dziś' },
    { path: '/trendy', name: 'Trendy' },
    { path: '/poznaj-nas', name: 'Poznaj Nas' },
    { path: '/kontakt', name: 'Kontakt' }
  ];

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          {paths.map((item) => (
            <Link key={item.path} href={item.path} legacyBehavior>
              <a
                className={`${styles.link} ${
                  isActive(item.path) ? styles.active : ''
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className={`${styles.burger} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
