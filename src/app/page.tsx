"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCogs,
  FaLaptopCode,
  FaSyncAlt,
  FaAward,
  FaTools,
  FaGlobeAmericas,
  FaHandshake,
} from "react-icons/fa";

import styles from './page.module.css';

const offerings = [
  { icon: <FaCogs />, title: "SAP ERP Solutions", desc: "Streamline your business operations with scalable ERP systems." },
  { icon: <FaLaptopCode />, title: "Custom Software Development", desc: "Build intelligent and efficient applications." },
  { icon: <FaSyncAlt />, title: "System Integration & Consulting", desc: "Optimize your IT infrastructure with expert guidance." },
];

const reasons = [
  { icon: <FaAward />, text: "Proven SAP Expertise" },
  { icon: <FaTools />, text: "End-to-End IT Services" },
  { icon: <FaGlobeAmericas />, text: "Global Project Experience" },
  { icon: <FaHandshake />, text: "Agile & Customer-Centric Approach" },
];

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* Background video */}
      {/* ✅ CORRECTED the className here to match the CSS file */}
      <video autoPlay muted loop playsInline className={styles['hero-video-fixed']}>
        <source src="/video/bg_Video.mp4" type="video/mp4" />
      </video>

      <div className={styles['content-wrapper']}>
        {/* Hero Section */}
        <section className={styles['hero-content']}>
          <h1>Empowering Businesses Through Digital Innovation</h1>
          <p>
            Website & Mobile App Development | SEO | Scalable IT Solutions
          </p>
          <button className={`${styles['cta-button']} ${styles.pulse}`}>Get a Free Consultation</button>
        </section>

        {/* Offerings */}
        <section className={styles['card-section']} data-aos="fade-up">
          <h2>Our Core Offerings</h2>
          <div className={styles['offerings-list']}>
            {offerings.map((item, idx) => (
              <div className={styles.card} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reasons */}
        <section className={styles['card-section']} data-aos="fade-up">
          <h2>Why AMSA Overseas?</h2>
          <div className={styles['reasons-list']}>
            {reasons.map((reason, idx) => (
              <div className={styles.card} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className={styles.icon}>{reason.icon}</div>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}