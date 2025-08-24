// app/projects/page.tsx

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";

// ✨ FIX 1: Define an interface for a single project object.
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

// ✨ FIX 2: Apply the Project[] type to the projectsData array.
const projectsData: Project[] = [
  {
    id: 1,
    title: "EduApp - LMS Mobile App",
    description: "A comprehensive cross-platform Learning Management System for coaching institutes, featuring interactive modules, real-time analytics, and secure parent-teacher communication.",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    image: "/img/mission.jpg"
  },
  {
    id: 2,
    title: "BuildMySite - No-Code Builder",
    description: "An intuitive drag-and-drop website builder designed to empower small businesses. This no-code solution allows users to create stunning, responsive websites in minutes.",
    tags: ["React", "Node.js", "MongoDB", "Web App"],
    image: "/img/mission.jpg"
  },
  {
    id: 3,
    title: "LuxeStyle - E-commerce Platform",
    description: "Developed a bespoke Shopify Plus theme and integrated custom apps for a luxury fashion brand, resulting in a 40% increase in conversion rates and a seamless user experience.",
    tags: ["Shopify", "Liquid", "React", "E-commerce"],
    image: "/img/mission.jpg"
  },
  {
    id: 4,
    title: "Fintech Enterprise ERP System",
    description: "Built a secure, scalable Enterprise Resource Planning (ERP) system for a financial services client, automating complex invoicing, reporting, and compliance workflows.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
    image: "/img/mission.jpg"
  },
  {
    id: 5,
    title: "HealthConnect App UI/UX",
    description: "Led the complete UI/UX design process for a health and wellness app, focusing on user-centric design to create an intuitive and calming user experience from scratch.",
    tags: ["Figma", "User Research", "Prototyping", "UI/UX"],
    image: "/img/mission.jpg"
  },
  {
    id: 6,
    title: "SEO Strategy for PharmaCo",
    description: "Executed a comprehensive keyword strategy, technical SEO audit, and high-quality content creation that boosted the client's organic traffic by over 300% in 3 months.",
    tags: ["SEO", "Content Strategy", "Analytics"],
    image: "/img/mission.jpg"
  }
];

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={styles.projectsPageWrapper}>
      <div className={styles.projectsBackground}>
        <video autoPlay muted loop playsInline className={styles.projectsVideo}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.projectsOverlay}></div>
      </div>

      <main className={styles.projectsContent}>
        <header className={styles.projectsHeader}>
          <h1>Our Work</h1>
          <p>
            We take pride in the solutions we've delivered. Here’s a glimpse into some of our successful projects and case studies.
          </p>
        </header>

        <section className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className={styles.projectCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.cardImage}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.cardOverlay}></div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardHoverContent}>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className={styles.ctaSection} data-aos="fade-up" data-aos-delay="300">
          <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
          <p className={styles.ctaDescription}>
            Let's build something great together. We're excited to hear your ideas and discuss how we can bring your vision to life.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get a Free Consultation
          </Link>
        </section>
        
      </main>
    </div>
  );
}