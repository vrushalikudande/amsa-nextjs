// app/career/page.tsx
import type { Metadata } from "next";
import styles from "./career.module.css";

export const metadata: Metadata = {
  title: "Career | Alphaseam Enterprise",
  description: "Career opportunities",
};

export default function CareerPage() {
  return (
    <div className={styles["career-container"]}>
      <video autoPlay muted loop playsInline className={styles["career-video"]}>
        <source src="/video/bg3_Video.mp4" type="video/mp4" />
      </video>
      <div className={styles["career-overlay"]}></div>

      <div className={styles["career-content"]}>
        <h1 className={styles["career-heading"]}>Career Page</h1>
      </div>
    </div>
  );
}
