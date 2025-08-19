// app/services/ServicesClientPage.tsx  <-- THIS IS THE NEW FILE

"use client";

import { useState } from "react";
// We don't need Metadata here
import {
  FaLaptopCode, FaMobileAlt, FaUsers, FaCogs, FaShoppingCart, FaDatabase,
  FaComments, FaPencilRuler, FaRocket
} from "react-icons/fa";
import styles from "./services.module.css";

// Data for sections
const services = [
  { title: "Website Development", description: "Modern, responsive websites using HTML5, CSS, JavaScript, React, and WordPress — designed to engage and convert.", icon: <FaLaptopCode /> },
  { title: "Mobile App Development", description: "Custom Android, iOS, and cross-platform (Flutter, React Native) mobile apps that solve real-world problems.", icon: <FaMobileAlt /> },
  { title: "SEO & Digital Marketing", description: "On-page, off-page, and technical SEO strategies that boost your search rankings and generate leads.", icon: <FaUsers /> },
  { title: "Full-Stack Development", description: "Complete solutions including frontend, backend (Node.js, PHP, Python), databases (MySQL, MongoDB), and APIs", icon: <FaCogs /> },
  { title: "E-Commerce Development", description: "Online store setup with custom checkout, cart, product pages, and secure payments.", icon: <FaShoppingCart /> },
  { title: "UI/UX Design", description: "Wireframes, prototypes, and clean design that enhances user experience and accessibility.", icon: <FaDatabase /> },
];

const technologiesData = {
  frontend: ["React.js", "Vue.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Python", "Java", ".NET", "PHP", "Laravel"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  cloud: ["AWS", "Azure", "Google Cloud", "Docker", "DigitalOcean", "Firebase"],
  cms: ["WordPress", "Shopify"],
  database: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
};

// Rename the function to match the new file name
export default function ServicesClientPage() { 
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div className={styles.servicesPageWrapper}>
      {/* Fixed background video */}
      <div className={styles.backgroundVideoContainer}>
        <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Main scrolling content */}
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1>Our Expert Services</h1>
          <p>Crafting Future-Ready Digital Solutions to Propel Your Business Forward</p>
          <a href="#services-grid" className={styles.ctaButton}>Explore Services</a>
        </section>

        {/* Services Grid Section */}
        <section id="services-grid" className={styles.section}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div className={styles.serviceCard} key={index}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach Section */}
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Approach</h2>
            <div className={styles.approachGrid}>
                <div className={styles.approachStep}>
                    <div className={styles.stepIcon}><FaComments /></div>
                    <h4>1. Consultation</h4>
                    <p>We begin by thoroughly understanding your goals and vision.</p>
                </div>
                <div className={styles.approachStep}>
                    <div className={styles.stepIcon}><FaPencilRuler /></div>
                    <h4>2. Design & Develop</h4>
                    <p>Our team designs and develops robust solutions with precision.</p>
                </div>
                <div className={styles.approachStep}>
                    <div className={styles.stepIcon}><FaRocket /></div>
                    <h4>3. Launch & Support</h4>
                    <p>We ensure a seamless launch and provide continuous support.</p>
                </div>
            </div>
        </section>

        {/* Technologies Section with Tabs */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies We Use</h2>
          <div className={styles.techTabsContainer}>
            <div className={styles.tabButtons}>
              {Object.keys(technologiesData).map((key) => (
                <button
                  key={key}
                  className={`${styles.tabButton} ${activeTab === key ? styles.active : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
            <div className={styles.tabContent}>
              {technologiesData[activeTab as keyof typeof technologiesData].map((tech) => (
                <span key={tech} className={styles.techPill}>{tech}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}