// app/services/page.tsx
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
  { title: "Web Development", description: "Our developers deliver responsive and scalable web solutions.", icon: <FaLaptopCode /> },
  { title: "Mobile App Development", description: "We specialize in custom mobile app solutions for startups and enterprises.", icon: <FaMobileAlt /> },
  { title: "Remote Staffing", description: "Hire top-tier remote developers tailored to your needs.", icon: <FaUsers /> },
  { title: "Custom Software", description: "Tailored software to meet your unique business challenges.", icon: <FaCogs /> },
  { title: "Software Testing", description: "Ensure quality with our manual and automated testing services.", icon: <FaBug /> },
  { title: "Cloud Computing", description: "Deploy scalable cloud solutions on AWS, Azure, or GCP.", icon: <FaCloud /> },
  { title: "E-Commerce", description: "Build and scale secure and fast online stores.", icon: <FaShoppingCart /> },
  { title: "DBMS", description: "Database solutions for efficient data management.", icon: <FaDatabase /> },
  { title: "DevOps", description: "Automate infrastructure, CI/CD, and monitoring pipelines.", icon: <FaTools /> },
];

const stats = [
  { icon: <FaSmile />, value: 5, label: "Happy Clients" },
  { icon: <FaCheckCircle />, value: 4, label: "Projects Completed" },
  { icon: <FaThumbsUp />, value: 4, label: "Positive Feedback" },
  { icon: <FaBolt />, value: 450, label: "Hours of Support" },
];

export default function ServicesPage() {
  return (
    <>
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

        <section className={styles.about}>
          <div className={styles["about-text"]}>
            <h2>About Our Company.</h2>
            <p>
              AMSA Overseas is a global leader in software development, dedicated to
              empowering businesses worldwide with cutting-edge technological solutions.
              Founded in 2019, we have consistently delivered exceptional apps that drive
              business growth and success.
            </p>
          </div>

          <div className={styles["about-stats"]}>
            {stats.map((stat, index) => (
              <div className={styles["stat-box"]} key={index}>
                <div className={styles["stat-icon"]}>{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
