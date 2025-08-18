'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
// import styles from './Header.module.css';
import styles from './Header.module.css';

 // ✅ Keep CSS as is

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/career', label: 'Career' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={scrolled ? '/img/logoblack.png' : '/img/logowhite.png'}
              alt="Logo"
              width={120} // ✅ Add width
              height={50} // ✅ Add height
              priority
              className={styles['logo-img']}
            />
          </Link>
        </div>

        {/* MENU ICON */}
        <Image
          src={scrolled ? '/img/menu.png' : '/img/menu2.png'}
          alt="Menu"
          width={30} // ✅ Add width
          height={30} // ✅ Add height
          className={styles['menu-icon']}
          onClick={toggleMenu}
        />

        {/* NAV */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <div className={styles['nav-links']}>
            {menuItems.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={closeMenu}
                className={pathname === path ? styles.active : ''}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
