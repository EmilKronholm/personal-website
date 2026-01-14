import styles from "./header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <section className={styles.headerContent}>
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
        </div>

    )
}