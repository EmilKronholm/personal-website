"use client"

import styles from "./header.module.css"
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {

    const [textOffset, setTextOffset] = useState({ x: 0.0, y: 0.0 });

    useEffect(() => {
        const updatePosition = (event: MouseEvent) => {
            const normalizedDistanceToCenter = (x: number, y: number) => {
                const constant = 40;
                const xNormalizedDistance =
                    ((window.innerWidth / 2 - x) / (window.innerWidth / 2)) * constant;
                const yNormalizedDistance =
                    ((window.innerHeight / 2 - y) / (window.innerHeight / 2)) * constant;
                return { x: xNormalizedDistance, y: yNormalizedDistance };
            };

            const r = normalizedDistanceToCenter(event.clientX, event.clientY);
            setTextOffset(r);
        };
        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);


    return (
        <div className={styles.header}>
            <section className={styles.headerContent} style={{ transform: `translate(${textOffset.x}px, ${textOffset.y}px)` }} >
                <div className={styles.title}>
                    <section className={styles.titleText}>
                        <h2 className={styles.h2}>Computer Engineer</h2>
                        <h1 className={styles.h1}>Emil Kronholm</h1>
                        <h3 className={styles.h3}>Software Development and Mobile Platforms</h3>
                    </section>
                </div>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <img src="../img/school-building.png" className={styles.listIcon} />
                        <p>3rd year student at Jönköping Engineering School</p>
                    </li>
                    <li className={styles.listItem}>
                        <img src="../img/training.png" className={styles.listIcon} />
                        <p>Working as lab assistant for Jönköping University</p>
                    </li>
                    <li className={styles.listItem}>
                        <img src="../img/student-grades.png" className={styles.listIcon} />
                        <p>Ex-intern at Spotify</p>
                    </li>
                </ul>
            </section>
        </div >

    )
}