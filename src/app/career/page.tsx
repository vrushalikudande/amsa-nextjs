import type { Metadata } from "next";
import { FaLightbulb, FaUsers, FaChartLine, FaLaptopCode } from "react-icons/fa";
import styles from "./career.module.css";

export const metadata: Metadata = {
  title: "Career | AMSA OVERSEAS",
  description: "Explore career opportunities at Alphaseam Enterprise. Join our innovative team and grow with us.",
};

// Data for the "Why Join Us" section
const whyJoinUsData = [
  {
    icon: <FaLightbulb />,
    title: "Innovate & Create",
    description: "Work on cutting-edge technologies and challenging projects that make a real-world impact."
  },
  {
    icon: <FaChartLine />,
    title: "Career Growth",
    description: "We provide continuous learning opportunities, mentorship, and a clear path for your professional growth."
  },
  {
    icon: <FaUsers />,
    title: "Collaborative Culture",
    description: "Be a part of a supportive and diverse team that values collaboration and mutual respect."
  },
  {
    icon: <FaLaptopCode />,
    title: "Work-Life Balance",
    description: "We believe in a healthy work-life balance with flexible timings and a friendly work environment."
  },
];


export default function CareerPage() {
  return (
    <div className={styles.careerPageWrapper}>
      {/* Background Video and Overlay */}
      <div className={styles.careerBackground}>
        <video autoPlay muted loop playsInline className={styles.careerVideo}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.careerOverlay}></div>
      </div>

      {/* Scrollable Content */}
      <main className={styles.careerContent}>
        <header className={styles.careerHeader}>
          <h1>Join Our Team</h1>
          <p className={styles.introText}>
            At Amsa, we are passionate about building a team of innovators, thinkers, and doers. 
            We believe that our success is driven by the talent and dedication of our people. 
            Explore the opportunities to grow with us.
          </p>
        </header>

        {/* Why Join Us Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Why Join Us?</h2>
          <div className={styles.whyJoinUsGrid}>
            {whyJoinUsData.map((item, index) => (
              <div className={styles.featureBox} key={index}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Open Positions</h2>
          <div className={styles.noOpenings}>
            <p>Currently, there are no open positions available.</p>
            <p>However, we are always on the lookout for talented individuals. Feel free to send your resume to <a href="mailto:hr@alphaseam.com">hr@alphaseam.com</a>.</p>
          </div>
        </section>

      </main>
    </div>
  );
}