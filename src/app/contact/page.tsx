import type { Metadata } from "next";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Alphaseam Enterprise",
  description: "Get in touch with us. Reach out for inquiries, support, or collaborations.",
};

export default function ContactPage() {
  return (
    <div className={styles.contactPageWrapper}>
      {/* Fixed background video */}
      <div className={styles.contactBackground}>
        <video autoPlay muted loop playsInline className={styles.contactVideo}>
          <source src="/video/bg2_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.contactOverlay}></div>
      </div>

      {/* Scrolling content */}
      <main className={styles.contactContent}>
        <header className={styles.contactHeader}>
          <h1>Get In Touch</h1>
          <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
        </header>

        <div className={styles.contactCard}>
          {/* Left Side: Contact Information */}
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p>Fill up the form and our team will get back to you within 24 hours.</p>
            
            <ul className={styles.infoList}>
              <li><FaPhoneAlt /> <span>+91-**********, +91-*********</span></li>
              <li><FaEnvelope /> <span>info@amsa.com</span></li>
              <li><FaMapMarkerAlt /> <span>Gera's Imperium Rise, Hinjewadi phase 2, Maharashtra 411057</span></li>
            </ul>

            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className={styles.formRow}>
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Message" rows={5} required></textarea>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className={styles.mapSection}>
           <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5042755279146!2d73.71548897465382!3d18.596374866855435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11ae71d12cf%3A0x5e0b13fd00d2d1bd!2sALPHASEAM!5e0!3m2!1sen!2sin!4v1750743322504!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      </main>
    </div>
  );
}
