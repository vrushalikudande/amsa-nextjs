import type { Metadata } from "next";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaUsers,
  FaCogs,
  FaBug,
  FaCloud,
  FaShoppingCart,
  FaDatabase,
  FaTools,
  FaSmile,
  FaCheckCircle,
  FaThumbsUp,
  FaBolt,
} from "react-icons/fa";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Alphaseam Enterprise",
  description: "Our services",
};

const services = [
  { title: "Website Development", description: "Modern, responsive websites using HTML5, CSS, JavaScript, React, and WordPress — designed to engage and convert.", icon: <FaLaptopCode /> },
  { title: "Mobile App Development", description: "Custom Android, iOS, and cross-platform (Flutter, React Native) mobile apps that solve real-world problems.", icon: <FaMobileAlt /> },
  { title: "SEO & Digital Marketing", description: "On-page, off-page, and technical SEO strategies that boost your search rankings and generate leads.", icon: <FaUsers /> },
  { title: "Full-Stack Development", description: "Complete solutions including frontend, backend (Node.js, PHP, Python), databases (MySQL, MongoDB), and APIs", icon: <FaCogs /> },
  { title: "E-Commerce Developement", description: "Online store setup with custom checkout, cart, product pages, and secure payments.", icon: <FaShoppingCart /> },
  { title: "UI/UX Design", description: "Wireframes, prototypes, and clean design that enhances user experience and accessibility.", icon: <FaDatabase /> },
];

export default function ServicesPage() {
  return (
    <div className={styles.servicesPageContainer}>

      {/* Fixed background video */}
      <div className={styles["services-video-section"]}>
        <video autoPlay muted loop playsInline className={styles["services-video"]}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles["services-overlay"]}></div>
      </div>

      {/* Main scrolling content */}
      <main className={styles["services-main-content"]}>
        <section className={styles["hero-heading"]}>
          <h1>Our Services</h1>
        </section>

        <section className={styles.services}>
          <p className={styles.description}>
            Empowered by exceptional talent, Alphaseam Pvt Ltd elevates your digital
            landscape by converging innovation and technology to craft bespoke software
            solutions that drive business success.
          </p>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies We Use Section */}
        <section className={styles.technologies}>
          <h2>Technologies We Use</h2>
          <p>We work with cutting-edge technologies to deliver modern solutions</p>
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3>Frontend</h3>
              <div className={styles.techPills}>
                <span>React</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>TypeScript</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Backend</h3>
              <div className={styles.techPills}>
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>.NET</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Mobile</h3>
              <div className={styles.techPills}>
                <span>React Native</span>
                <span>Flutter</span>
                <span>Swift</span>
                <span>Kotlin</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Cloud</h3>
              <div className={styles.techPills}>
                <span>AWS</span>
                <span>Azure</span>
                <span>Google Cloud</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}