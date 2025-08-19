import type { Metadata } from "next";
import Image from "next/image"; // Using Next.js Image component for potential future images
import { FaMobileAlt, FaLaptopCode, FaSearch } from "react-icons/fa";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Our Work | Alphaseam Enterprise",
  description: "Explore our portfolio of successful projects and case studies.",
};

// Data for the projects
const projectsData = [
  {
    icon: <FaMobileAlt />,
    title: "EduApp (Mobile App)",
    description: "A cross-platform Learning Management System (LMS) designed for coaching institutes to streamline courses and student engagement.",
    tags: ["Flutter", "Firebase", "Dart"],
    image: "/images/project-eduapp.jpg" // Placeholder image path
  },
  {
    icon: <FaLaptopCode />,
    title: "BuildMySite (Web App)",
    description: "An intuitive business website builder featuring a drag-and-drop interface, enabling users to create stunning websites without code.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/project-buildmysite.jpg" // Placeholder image path
  },
  {
    icon: <FaSearch />,
    title: "SEO for PharmaCo",
    description: "Executed a complete SEO and blog strategy that successfully boosted the client's organic traffic by over 300% in just 3 months.",
    tags: ["SEO", "Content Strategy", "Analytics"],
    image: "/images/project-seo.jpg" // Placeholder image path
  }
];

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPageWrapper}>
      {/* Background Video and Overlay */}
      <div className={styles.projectsBackground}>
        <video autoPlay muted loop playsInline className={styles.projectsVideo}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.projectsOverlay}></div>
      </div>

      {/* Scrollable Content */}
      <main className={styles.projectsContent}>
        <header className={styles.projectsHeader}>
          <h1>Our Work</h1>
          <p>
            We take pride in the solutions we've delivered. Here’s a glimpse into some of our successful projects and case studies.
          </p>
        </header>

        {/* Projects Grid */}
        <section className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div className={styles.projectCard} key={index}>
              <div className={styles.cardIcon}>{project.icon}</div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.cardTags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}