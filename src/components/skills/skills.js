import React from "react";
import styles from './skills.module.css';


function Skills () {
    return (
        <div className={styles.skillsContainer}>

            <section className={styles.percentageContainer}>
                <div className={styles.percentageReact}>
                    <p>React</p>
                </div>
            </section>

            <section className={styles.percentageContainer}>
                <div className={styles.percentageHtml}>
                    <p>HTML</p>
                </div>
            </section>

            <section className={styles.percentageContainer}>
                <div className={styles.percentageCss}>
                    <p>CSS</p>
                </div>
            </section>

            <section className={styles.percentageContainer}>
                <div className={styles.percentageRest}>
                    <p>Rest</p>
                </div>
            </section>

            <section className={styles.percentageContainer}>
                <div className={styles.percentageRedux}>
                    <p>Redux</p>
                </div>
            </section>

            <section className={styles.percentageContainer}>
                <div className={styles.percentageUiUx}>
                    <p>UI/UX</p>
                </div>
            </section>

        </div>
    )
}


export default Skills;