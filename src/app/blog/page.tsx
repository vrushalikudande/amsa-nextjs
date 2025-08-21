// app/blog/page.tsx

// ✨ CHANGE 1: Client Component banana zaroori hai event handling (onClick) ke liye
"use client"; 

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
});

// Note: Metadata export Client Components mein aese kaam nahi karta. 
// Isko layout.tsx mein move karna behtar practice hai. Abhi ke liye aese hi rakhte hain.
/*
export const metadata: Metadata = {
  title: "Blog | AMSA OVERSEAS",
  description: "Insights, stories, and updates from the forefront of technology and innovation.",
};
*/

const blogPosts = [
    {
    id: 1,
    title: "The Future is Now: 5 Emerging Trends in Software Development for 2025",
    description: "Explore the latest practices and tools reshaping how software is built, from AI-driven development to decentralized applications.",
    image: "/img/future.jpg",
    author: "Jane Doe",
    date: "August 19, 2025",
    tags: ["Technology", "Future", "Dev"],
  },
  {
    id: 2,
    title: "Why UI/UX Design is the Heartbeat of Digital Success in 2025",
    description: "A deep dive into how intuitive design and seamless user experience can dramatically increase engagement, conversions, and brand loyalty.",
    image: "/img/ui-ux.jpg",
    author: "John Smith",
    date: "August 15, 2025",
    tags: ["Design", "UI/UX"],
  },
  {
    id: 3,
    title: "Mastering DevOps: How to Accelerate Your Delivery Pipeline",
    description: "Learn the core principles of DevOps and discover how to implement them to accelerate your software release cycles while maintaining impeccable quality.",
    image: "/img/devops.jpg",
    author: "Emily White",
    date: "August 10, 2025",
    tags: ["DevOps", "CI/CD"],
  },
   {
    id: 4,
    title: "The Rise of Scalable IT: Building an Infrastructure That Grows With You",
    description: "From cloud solutions to microservices, we explore the best strategies for creating a flexible and robust IT infrastructure that scales on demand.",
    image: "/img/scalable-it.jpg",
    author: "Chris Green",
    date: "August 5, 2025",
    tags: ["Cloud", "Infrastructure"],
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  // ✨ CHANGE 2: Smooth scroll ke liye function banaya hai
  const handleScroll = () => {
    const element = document.getElementById("posts-grid-section");
    if (element) {
      // Yeh line smooth scrolling karegi
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <div className={styles.blogVideoContainer}>
        <video autoPlay muted loop playsInline className={styles.blogVideo}>
          <source src="/video/bg3_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.blogOverlay}></div>
      </div>

      <main className={styles.blogContent}>
        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>From The Amsa Blog</h1>
          <p className={styles.blogSubtitle}>
            Insights, stories, and updates to help you navigate the future of technology.
          </p>
          {/* ✨ CHANGE 3: Explore Posts ka button add kiya hai */}
          <button onClick={handleScroll} className={styles.exploreButton}>
            Explore Posts
          </button>
        </header>

        <section className={styles.featuredSection}>
          <Link href={`/blog/${featuredPost.id}`} className={styles.featuredCard}>
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.featuredImage}
            />
            <div className={styles.featuredContent}>
              <div className={styles.cardTags}>
                {featuredPost.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <div className={styles.cardMeta}>
                <span>By {featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </Link>
        </section>

        {/* ✨ CHANGE 4: Yahan 'id' add kiya hai taaki scroll function isse target kar sake */}
        <section id="posts-grid-section" className={styles.postsGrid}>
          {otherPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className={styles.blogCard}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                  <div className={styles.cardTags}>
                   {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDescription}>{post.description}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.cardMeta}>
                    <span>By {post.author}</span>
                  </div>
                  <span className={styles.readMoreLink}>Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}