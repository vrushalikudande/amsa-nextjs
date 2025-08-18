// app/blog/page.tsx
import type { Metadata } from "next";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog | Alphaseam Enterprise",
  description: "Insights and updates",
};

export default function BlogPage() {
  return (
    <>
      {/* Fixed background video */}
      <div className={styles["blog-video-container"]}>
        <video autoPlay muted loop className={styles["blog-video"]}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["blog-overlay"]}></div>
      </div>

      {/* Main scrolling content */}
      <main className={styles["blog-content"]}>
        <section className={styles["blog-header"]}>
          <h1 className={styles["blog-title"]}>Our Blog</h1>
          <p className={styles["blog-subtitle"]}>
            Insights, stories, and updates from AMSA to help you stay ahead in the tech world.
          </p>
        </section>

        <section className={styles["blog-posts"]}>
          <div className={styles["blog-card"]}>
            <h3>5 Emerging Trends in Software Development</h3>
            <p>Explore the latest practices and tools reshaping how software is built in 2025.</p>
            <button>Read More</button>
          </div>

          <div className={styles["blog-card"]}>
            <h3>Why UI/UX Design is Crucial in 2025</h3>
            <p>Discover how a great user experience can increase engagement and conversions.</p>
            <button>Read More</button>
          </div>

          <div className={styles["blog-card"]}>
            <h3>DevOps: Speeding up Delivery Pipelines</h3>
            <p>Learn how DevOps accelerates software releases while maintaining quality.</p>
            <button>Read More</button>
          </div>
        </section>
      </main>
    </>
  );
}
