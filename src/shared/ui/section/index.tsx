import React from "react";
import styles from "./section.module.css";

export const Section: React.FC<{
  children?: React.ReactNode,
}> = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.section__inner}>
        { children }
      </div>
    </section>
  );
};