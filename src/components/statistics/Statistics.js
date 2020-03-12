import React from "react";
import StatsItem from "./statsItem/StatsItem";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => (
  <div className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statisticsList}>
      {stats.map(elem => (
        <StatsItem data={elem} key={elem.id} />
      ))}
    </ul>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};
