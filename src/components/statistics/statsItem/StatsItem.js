import React from "react";
import styles from "../Statistics.module.css";

const StatsItem = ({ data: { label, percentage } }) => (
  <li
    className={styles.item}
    style={{
      backgroundColor: `#${(((Math.random() + 2) * 16777216) | 0)
        .toString(16)
        .slice(1)}`
    }}
  >
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

export default StatsItem;
