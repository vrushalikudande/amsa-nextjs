"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Sending your message...");

    // Fake API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.dismiss(); // Dismiss the loading toast
    toast.success("Message sent successfully!");
    
    setFormData({
      firstName: "", lastName: "", email: "", phone: "", message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className={styles.contactPageWrapper}>
      <Toaster position="top-right" reverseOrder={false} />

      <div className={styles.contactBackground}>
        <video autoPlay muted loop playsInline className={styles.contactVideo}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.contactOverlay}></div>
      </div>

      <main className={styles.contactContent}>
        <header className={styles.contactHeader}>
          <h1>Get In Touch</h1>
          <p>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </header>

        {/* ✨ Main card jisme info aur form dono honge */}
        <div className={styles.contactCard}>
          {/* Left Side: Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p>
              Fill up the form and our team will get back to you within 24 hours.
            </p>
            <ul className={styles.infoList}>
              <li>
                <FaPhoneAlt />
                <a href="tel:+917222029111">+91-7222029111</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:info@amsaoverseas.com">info@amsaoverseas.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Gera's Imperium Rise, Hinjewadi phase 2, Maharashtra 411057</span>
              </li>
            </ul>
            <div className={styles.socialIcons}>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <span className={styles.errorMessage}>{errors.lastName}</span>}
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone (Optional)</label>
                <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={10} />
                {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
            </div>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className={styles.mapSection}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.12345678901234!3d18.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA3JzI0LjQiTiA3M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1629462123456!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </div>
  );
}