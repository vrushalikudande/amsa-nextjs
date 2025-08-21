import type { Metadata } from "next";
import styles from "./about.module.css";
import { 
    FaBullseye, FaEye, FaHandshake, FaCheckCircle, FaLightbulb, FaUsers, FaMedal, FaHeart,
    FaRegBuilding, FaBriefcase, FaUserFriends, FaGlobeEurope, FaAward, FaMapMarkedAlt 
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About | AMSA OVERSEAS",
  description: "Learn about the mission, vision, and journey of Alphaseam Enterprise.",
};

// Data for Our Journey section with new icons
const journeyData = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology.",
    icon: <FaRegBuilding />
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Successfully delivered our first enterprise-level solution, a significant milestone.",
    icon: <FaBriefcase />
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to over 25+ skilled professionals dedicated to innovation.",
    icon: <FaUserFriends />
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Extended our services to global markets, helping businesses worldwide.",
    icon: <FaGlobeEurope />
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received awards for innovation and excellence in the technology sector.",
    icon: <FaAward />
  },
  {
    year: "2024",
    title: "New Office Launch",
    description: "Inaugurated a new state-of-the-art development center in Pune.",
    icon: <FaMapMarkedAlt />
  }
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPageWrapper}>
      {/* fixed background video */}
      <div className={styles.backgroundVideo}>
        <video autoPlay muted loop playsInline>
           <source src="/video/bg2_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* content */}
      <main className={styles.aboutContent}>
        {/* Who We Are */}
        <section className={styles.aboutHeader}>
          <h1>Who We Are</h1>
          <p>
            Alphaseam Enterprise is a dynamic IT company committed to helping 
            businesses grow in the digital era. Founded in Pune, we specialize in 
            crafting tailored software solutions across platforms and industries.
          </p>
        </section>

        {/* Mission - Vision - Why Choose Us */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <FaBullseye className={styles.icon} />
            <h2>Mission</h2>
            <p>
              To empower clients with innovative, scalable, and secure IT solutions 
              that drive growth and efficiency.
            </p>
          </div>
          <div className={styles.infoCard}>
            <FaEye className={styles.icon} />
            <h2>Vision</h2>
            <p>
              To be a leading global provider of digital technology services 
              with a reputation for excellence and trust.
            </p>
          </div>
          <div className={styles.infoCard}>
            <FaHandshake className={styles.icon} />
            <h2>Why Choose Us</h2>
            <ul className={styles.reasonsList}>
              <li><FaCheckCircle /> Client-centric approach</li>
              <li><FaCheckCircle /> Scalable tech stack</li>
              <li><FaCheckCircle /> Quality assurance</li>
              <li><FaCheckCircle /> Timely delivery</li>
            </ul>
          </div>
        </div>

        {/* Our Values Section */}
        <section className={styles.valuesSection}>
          <h2>Our Core Values</h2>
          <p>The principles that guide our work and define our company culture</p>
          <div className={styles.valuesGrid}>
            <div className={styles.valuesCard}>
              <FaLightbulb className={styles.icon} />
              <h3>Innovation</h3>
              <p>We constantly push the boundaries of technology to deliver cutting-edge solutions.</p>
            </div>
            <div className={styles.valuesCard}>
              <FaUsers className={styles.icon} />
              <h3>Collaboration</h3>
              <p>We work closely with our clients to understand their needs and exceed expectations.</p>
            </div>
            <div className={styles.valuesCard}>
              <FaMedal className={styles.icon} />
              <h3>Excellence</h3>
              <p>We strive for perfection in every project, delivering high-quality results.</p>
            </div>
            <div className={styles.valuesCard}>
              <FaHeart className={styles.icon} />
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and ethical practices.</p>
            </div>
          </div>
        </section>

        {/* Our Journey Section - REDESIGNED with Alternating Layout */}
        <section className={styles.journeySection}>
          <h2>Our Journey</h2>
          <p>The milestones that have shaped our growth and success over the years.</p>
          <div className={styles.journeyFlow}>
            {journeyData.map((item, index) => (
              <div className={styles.journeyItem} key={item.year}>
                <div className={styles.journeyIconContainer}>
                  {item.icon}
                </div>
                <div className={styles.journeyTextContainer}>
                  <span className={styles.journeyYear}>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}