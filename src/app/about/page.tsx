"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from "./about.module.css";
import {
    FaBullseye, FaEye, FaLightbulb, FaUsers, FaMedal, FaHeart,
    FaRegBuilding, FaBriefcase, FaUserFriends, FaGlobeEurope, FaAward, FaMapMarkedAlt
} from "react-icons/fa";

interface JourneyItem {
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}


interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const journeyData: JourneyItem[] = [
    { year: "2019", title: "Company Founded", description: "Started with a vision to transform businesses through technology.", icon: <FaRegBuilding /> },
    { year: "2020", title: "First Major Client", description: "Successfully delivered our first enterprise-level solution.", icon: <FaBriefcase /> },
    { year: "2021", title: "Team Expansion", description: "Grew our team to over 25+ skilled professionals.", icon: <FaUserFriends /> },
    { year: "2022", title: "Global Expansion", description: "Extended our services to international markets.", icon: <FaGlobeEurope /> },
    { year: "2023", title: "Industry Recognition", description: "Received awards for innovation and excellence.", icon: <FaAward /> },
    { year: "2024", title: "New Office Launch", description: "Inaugurated a new state-of-the-art development center in Pune.", icon: <FaMapMarkedAlt /> }
];

const teamData: TeamMember[] = [
    { name: "John Doe", role: "CEO & Founder", image: "/img/model1.jpg" },
    { name: "Jane Smith", role: "CTO", image: "/img/model1.jpg" },
    { name: "Peter Jones", role: "Lead Developer", image: "/img/model1.jpg" },
    { name: "Emily White", role: "Project Manager", image: "/img/model1.jpg" }
];


const StatCounter = ({ end, suffix, text }: { end: number, suffix: string, text: string }) => {
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
    return (
        <div className={styles.statItem} ref={ref}>
            <span className={styles.statNumber}>
                {inView ? <CountUp start={0} end={end} duration={2.5} /> : '0'}{suffix}
            </span>
            <span className={styles.statText}>{text}</span>
        </div>
    );
};

export default function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);


    return (
        <div className={styles.aboutPageWrapper}>
            <div className={styles.backgroundVideo}>
                <video autoPlay muted loop playsInline>
                    <source src="/video/bg3_Video.mp4" type="video/mp4" />
                </video>
                <div className={styles.videoOverlay}></div>
            </div>

            <main className={styles.aboutContent}>
                {/* UPDATED HEADER SECTION */}
                <header className={styles.aboutHeader} data-aos="fade-up">
                    <div className={styles.headerText}>
                        <h1>Driven by Innovation, Defined by Excellence</h1>
                        <p>We are a team of thinkers, creators, and technologists dedicated to building software that solves real-world problems and drives business growth.</p>
                    </div>
                    <div className={styles.headerImage}>
                        <Image src="/img/mission.jpg" alt="Team collaborating on a project" width={600} height={400} />
                    </div>
                </header>

                <section className={styles.missionSection} data-aos="fade-up">
                    <div className={styles.missionContent}>
                        <div className={styles.missionItem}>
                            <FaBullseye className={styles.icon} />
                            <div>
                                <h2>Our Mission</h2>
                                <p>To empower our clients with innovative, scalable, and secure IT solutions that deliver measurable value and a competitive edge.</p>
                            </div>
                        </div>
                        <div className={styles.missionItem}>
                            <FaEye className={styles.icon} />
                            <div>
                                <h2>Our Vision</h2>
                                <p>To be a globally recognized leader in digital transformation, renowned for our unwavering commitment to quality and client success.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.statsSection} data-aos="fade-up">
                    <StatCounter end={50} suffix="+" text="Projects Delivered" />
                    <StatCounter end={25} suffix="+" text="Happy Clients" />
                    <StatCounter end={5} suffix="+" text="Years in Business" />
                    <StatCounter end={10} suffix="+" text="Experts on Team" />
                </section>

                <section className={styles.journeySection} data-aos="fade-up">
                    <h2>Our Journey</h2>
                    <p>The milestones that have shaped our growth and success.</p>
                    <div className={styles.journeyFlow}>
                        {journeyData.map((item) => (
                            <div className={styles.journeyItem} key={item.year} data-aos="fade-up">
                                <div className={styles.journeyContent}>
                                    <div className={styles.journeyCard}>
                                        <span className={styles.journeyYear}>{item.year}</span>
                                        <div className={styles.cardHeader}>
                                            <span className={styles.cardIcon}>{item.icon}</span>
                                            <h3 className={styles.cardTitle}>{item.title}</h3>
                                        </div>
                                        <p className={styles.cardDescription}>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.teamSection} data-aos="fade-up">
                    <h2>Meet Our Team</h2>
                    <p>The passionate minds behind our success.</p>
                    <div className={styles.teamGrid}>
                        {teamData.map(member => (
                            <div className={styles.teamMember} key={member.name}>
                                <div className={styles.teamMemberImage}>
                                    <Image src={member.image} alt={member.name} width={250} height={250} />
                                </div>
                                <h3>{member.name}</h3>
                                <span>{member.role}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.valuesSection} data-aos="fade-up">
                    <h2>Our Core Values</h2>
                    <p>The principles that guide everything we do.</p>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valuesCard}><FaLightbulb /><h3>Innovation</h3></div>
                        <div className={styles.valuesCard}><FaUsers /><h3>Collaboration</h3></div>
                        <div className={styles.valuesCard}><FaMedal /><h3>Excellence</h3></div>
                        <div className={styles.valuesCard}><FaHeart /><h3>Integrity</h3></div>
                    </div>
                </section>
            </main>
        </div>
    );
}