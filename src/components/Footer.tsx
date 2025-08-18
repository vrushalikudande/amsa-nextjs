import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import styles from './Footer.module.css';
import styles from './Footer.module.css';
// Correct ✅


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles['footer-content']}`}>
        {/* Left: Logo */}
        <div className={styles['footer-logo']}>
          <h3>AMSA Overseas</h3>
          <p>Innovating with precision</p>
        </div>

        {/* Center: Social Media */}
        <div className={styles['footer-socials-block']}>
          <h4>Follow Us</h4>
          <div className={styles['footer-socials']}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className={styles['footer-contact']}>
          <p>Email: info@amsaoverseas.com</p>
          <p>Phone: +91 0000000000</p>
        </div>
      </div>

      {/* Compact Bottom Copyright */}
      <div className={styles['footer-copyright']}>
        <p>&copy; {new Date().getFullYear()} AMSA Overseas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
