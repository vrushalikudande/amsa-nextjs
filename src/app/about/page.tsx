import type { Metadata } from "next";
import styles from "./about.module.css";
import { FaBullseye, FaEye, FaHandshake, FaCheckCircle, FaLightbulb, FaUsers, FaMedal, FaHeart } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About | Alphaseam Enterprise",
  description: "About AMSA Overseas",
};

export default function AboutPage() {
  return (
    <>
      {/* fixed background video */}
      <video autoPlay muted loop playsInline className={styles["background-video-fixed"]}>
        <source src="/video/bg3_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* content */}
      <div className={styles["about-wrapper"]}>
        {/* Who We Are */}
        <section className={styles["about-header"]}>
          <h1>Who We Are</h1>
          <p>
            AMSA Overseas Pvt. Ltd. is a dynamic IT company committed to helping 
            businesses grow in the digital era. Founded in Pune, we specialize in 
            crafting tailored software solutions across platforms and industries.
          </p>
        </section>

        {/* Mission - Vision - Why Choose Us */}
        <div className={styles["about-grid"]}>
          <div className={styles["about-card"]}>
            <FaBullseye className={styles["icon"]} />
            <h2>Mission</h2>
            <p>
              To empower clients with innovative, scalable, and secure IT solutions 
              that drive growth and efficiency.
            </p>
          </div>

          <div className={styles["about-card"]}>
            <FaEye className={styles["icon"]} />
            <h2>Vision</h2>
            <p>
              To be a leading global provider of digital technology services 
              with a reputation for excellence and trust.
            </p>
          </div>

          <div className={styles["about-card"]}>
            <FaHandshake className={styles["icon"]} />
            <h2>Why Choose Us</h2>
            <ul>
              <li><FaCheckCircle /> Client-centric approach</li>
              <li><FaCheckCircle /> Scalable tech stack</li>
              <li><FaCheckCircle /> Quality assurance</li>
              <li><FaCheckCircle /> Timely delivery</li>
              <li><FaCheckCircle /> Affordable pricing</li>
            </ul>
          </div>
        </div>

        {/* Our Values Section */}
        <section className={styles["values-section"]}>
          <h1>Our Values</h1>
          <p>The principles that guide our work and define our company culture</p>

          <div className={styles["values-grid"]}>
            <div className={styles["values-card"]}>
              <FaLightbulb className={styles["values-icon"]} />
              <h3>Innovation</h3>
              <p>We constantly push the boundaries of technology to deliver cutting-edge solutions.</p>
            </div>

            <div className={styles["values-card"]}>
              <FaUsers className={styles["values-icon"]} />
              <h3>Collaboration</h3>
              <p>We work closely with our clients to understand their needs and exceed expectations.</p>
            </div>

            <div className={styles["values-card"]}>
              <FaMedal className={styles["values-icon"]} />
              <h3>Excellence</h3>
              <p>We strive for perfection in every project, delivering high-quality results.</p>
            </div>

            <div className={styles["values-card"]}>
              <FaHeart className={styles["values-icon"]} />
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and ethical practices.</p>
            </div>
          </div>
        </section>
{/* our journey */}
        <section className={styles["journey-section"]}>
          <h1>Our Journey</h1>
          <p>The milestones that shaped our growth</p>

          <div className={styles["timeline"]}>
            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-circle"]}>2019</div>
              <div className={styles["timeline-content"]}>
                <h3>Company Founded</h3>
                <p>Started with a vision to transform businesses through technology.</p>
              </div>
            </div>

            <div className={`${styles["timeline-item"]} ${styles["right"]}`}>
              <div className={styles["timeline-circle"]}>2020</div>
              <div className={styles["timeline-content"]}>
                <h3>First Major Client</h3>
                <p>Successfully delivered our first enterprise-level solution.</p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-circle"]}>2021</div>
              <div className={styles["timeline-content"]}>
                <h3>Team Expansion</h3>
                <p>Grew our team to 25+ skilled professionals.</p>
              </div>
            </div>

            <div className={`${styles["timeline-item"]} ${styles["right"]}`}>
              <div className={styles["timeline-circle"]}>2022</div>
              <div className={styles["timeline-content"]}>
                <h3>International Expansion</h3>
                <p>Extended our services to global markets.</p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-circle"]}>2023</div>
              <div className={styles["timeline-content"]}>
                <h3>Industry Recognition</h3>
                <p>Received awards for innovation and excellence in technology.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
