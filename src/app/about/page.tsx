// app/about/page.tsx
import type { Metadata } from "next";
import styles from "./about.module.css";

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

      {/* scrolling content */}
      <div className={styles["about-wrapper"]}>
        <section className={styles["about-content"]}>
          <h1>About AMSA Overseas</h1>
          <p>
            AMSA Overseas is dedicated to delivering SAP-powered ERP,
            digital transformation, and enterprise solutions that drive growth
            and innovation for our clients.
          </p>
          <p>
            Our mission is to empower businesses with cutting-edge technology,
            robust strategies, and an agile approach, ensuring success in a
            rapidly changing world.
          </p>
        </section>
      </div>
    </>
  );
}
