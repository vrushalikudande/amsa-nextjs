'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open (no CSS module hacks)
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : original || '';
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [menuOpen]);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Project' },
    { path: '/career', label: 'Career' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }, // CTA
  ];

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        menuOpen ? styles.menuOpen : ''
      }`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" aria-label="Go to homepage">
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

        {/* Desktop / Mobile Nav */}
        <nav
          id="primaryNav"
          className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
          aria-label="Primary"
        >
          <div className={styles.navLinks}>
            {menuItems.map(({ path, label }) => {
              const isActive = pathname === path;
              const isCTA = label === 'Contact';
              return (
                <Link
                  key={path}
                  href={path}
                  className={`${isCTA ? styles.ctaButton : styles.navLink} ${
                    isActive && !isCTA ? styles.active : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className={styles.menuIcon}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primaryNav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${styles.bar1}`} />
          <span className={`${styles.bar} ${styles.bar2}`} />
          <span className={`${styles.bar} ${styles.bar3}`} />
        </button>
      </div>
    </header>
  );
};

export default Header;
