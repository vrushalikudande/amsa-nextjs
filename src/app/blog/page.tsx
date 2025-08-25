"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link"; 
import styles from "./blog.module.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

interface BlogPost {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    date: string;
    tags: string[];
    readTime: string;
}

const allPosts: BlogPost[] = [
    { id: 1, title: "5 Emerging Trends in Software Development for 2025", description: "From AI-driven development to decentralized applications, we explore the latest practices reshaping how software is built. This includes a deeper look into the impact of quantum computing on cryptography and the rise of serverless architectures for scalable, cost-effective solutions.", image: "/img/future.jpg", author: "Jane Doe", date: "August 19, 2025", tags: ["Technology", "Future", "Dev"], readTime: "7 min read" },
    { id: 2, title: "Why UI/UX Design is the Heartbeat of Digital Success", description: "A deep dive into how intuitive design can dramatically increase engagement, conversions, and brand loyalty. We analyze case studies from leading tech companies to demonstrate the tangible ROI of investing in a user-centric design process from day one.", image: "/img/ui-ux.jpg", author: "John Smith", date: "August 15, 2025", tags: ["Design", "UI/UX"], readTime: "5 min read" },
    { id: 3, title: "Mastering DevOps: How to Accelerate Your Delivery Pipeline", description: "Discover how to implement core DevOps principles to accelerate your software release cycles while maintaining quality. This guide covers everything from continuous integration and deployment (CI/CD) to infrastructure as code (IaC) and monitoring.", image: "/img/devops.jpg", author: "Emily White", date: "August 10, 2025", tags: ["DevOps", "CI/CD"], readTime: "8 min read" },
    { id: 4, title: "The Rise of Scalable IT: Building an Infrastructure That Grows", description: "From cloud solutions to microservices, we explore strategies for creating a flexible and robust IT infrastructure. Learn how to design systems that can handle rapid growth without compromising performance or security.", image: "/img/scalable-it.jpg", author: "Chris Green", date: "August 5, 2025", tags: ["Cloud", "Infrastructure"], readTime: "6 min read" },
];

// Get unique categories for filter buttons
const allCategories = ['All', ...new Set(allPosts.flatMap(post => post.tags))];

// New component for the Popup Modal
const BlogModal = ({ post, onClose }: { post: BlogPost; onClose: () => void; }) => {
  if (!post) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.modalImageContainer}>
          <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.modalTextContent}>
          <div className={styles.modalTags}>
            {post.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
          <h2 className={styles.modalTitle}>{post.title}</h2>
          <div className={styles.modalMeta}>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <p className={styles.modalDescription}>{post.description}</p>
        </div>
      </div>
    </div>
  );
};


export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
    };
    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const filteredPosts = activeCategory === 'All'
        ? allPosts
        : allPosts.filter(post => post.tags.includes(activeCategory));

    const featuredPost = filteredPosts[0];
    const otherPosts = filteredPosts.slice(1);

    return (
        <div className={`${styles.blogPageWrapper} ${poppins.variable}`}>
            <div className={styles.blogVideoContainer}>
                <video autoPlay muted loop playsInline className={styles.blogVideo}>
                    <source src="/video/bg3_Video.mp4" type="video/mp4" />
                </video>
                <div className={styles.blogOverlay}></div>
            </div>

            <main className={styles.blogContent}>
                <header className={styles.blogHeader} data-aos="fade-up">
                    <h1 className={styles.blogTitle}>From The Blog</h1>
                    <p className={styles.blogSubtitle}>Insights, stories, and updates to help you navigate the future of technology.</p>
                </header>

                <section className={styles.filterBar} data-aos="fade-up" data-aos-delay="100">
                    {allCategories.map(category => (
                        <button
                            key={category}
                            className={`${styles.filterButton} ${activeCategory === category ? styles.activeFilter : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </section>

                {featuredPost && (
                    <section className={styles.featuredSection} data-aos="fade-up" data-aos-delay="200">
                        <div onClick={() => handlePostClick(featuredPost)} className={styles.featuredCard}>
                            <div className={styles.featuredImageContainer}>
                                <Image src={featuredPost.image} alt={featuredPost.title} fill style={{ objectFit: 'cover' }} className={styles.cardImage} />
                            </div>
                            <div className={styles.featuredTextContent}>
                                <div className={styles.cardTags}>
                                    {featuredPost.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                                <p className={styles.cardDescription}>{featuredPost.description}</p>
                                <div className={styles.cardMeta}>
                                    <span>{featuredPost.author}</span>
                                    <span>•</span>
                                    <span>{featuredPost.date}</span>
                                    <span>•</span>
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <span className={styles.readMoreLink}>Read Full Article &rarr;</span>
                            </div>
                        </div>
                    </section>
                )}

                <section id="posts-grid-section" className={styles.postsGrid}>
                    {otherPosts.map((post, index) => (
                        <div onClick={() => handlePostClick(post)} key={post.id} className={styles.blogCard} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={styles.cardImageContainer}>
                                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTags}>
                                    {post.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <div className={styles.cardMeta}>
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            {selectedPost && (
                <BlogModal post={selectedPost} onClose={handleCloseModal} />
            )}
        </div>
    );
}