'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on route change
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Project' },
    { path: '/career', label: 'Career' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={scrolled || menuOpen ? '/img/logoblack.png' : '/img/logowhite.png'}
              alt="Alphaseam Logo"
              width={110}
              height={45}
              priority
              className={styles.logoImg}
            />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.navLinks}>
            {menuItems.map(({ path, label }) => {
              const isCtaButton = label === 'Contact';
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={closeMenu}
                  className={`${pathname === path ? styles.active : ''} ${isCtaButton ? styles.ctaButton : styles.navLink}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* MOBILE MENU ICON */}
        <div className={styles.menuIcon} onClick={toggleMenu} role="button" tabIndex={0}>
          <div className={`${styles.bar} ${styles.bar1}`}></div>
          <div className={`${styles.bar} ${styles.bar2}`}></div>
          <div className={`${styles.bar} ${styles.bar3}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;