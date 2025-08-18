// app/contact/page.tsx
import type { Metadata } from "next";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Alphaseam Enterprise",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <>
      {/* Fixed background video */}
      <div className={styles["contact-video-container"]}>
        <video autoPlay muted loop playsInline className={styles["contact-video"]}>
          <source src="/video/bg2_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["contact-overlay"]}></div>
      </div>

      {/* Scrolling content */}
      <main className={styles["contact-content"]}>
        <section className={styles["contact-header"]}>
          <h1 className={styles["contact-heading"]}>Contact Us</h1>
          <p>
            We would love to connect with you! Please fill out the form below or email us directly at
            <a href="mailto:info@amsa.com"> info@amsa.com</a>.
          </p>
          <ul>
            <li>🏠 000 Gera&apos;s Imperium Rise, Hinjewadi phase 2, Maharashtra 411057</li>
            <li>📱 +91-**********, +91-*********</li>
            <li>📧 info@amsa.com</li>
          </ul>
          <div className={styles["social-icons"]}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaLinkedinIn />
            </a>
          </div>
        </section>

        <div className={styles["contact-container"]}>
          <h1 className={styles.title}>Get In Touch</h1>
          <div className={styles["contact-wrapper"]}>
            {/* Google Map */}
            <div className={styles["map-container"]}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5042755279146!2d73.71548897465382!3d18.596374866855435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11ae71d12cf%3A0x5e0b13fd00d2d1bd!2sALPHASEAM!5e0!3m2!1sen!2sin!4v1750743322504!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className={styles["contact-form"]}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows={6}></textarea>
              <button className={styles["submit-button"]}>SUBMIT</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
