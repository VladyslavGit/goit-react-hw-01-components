import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <>
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.li}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
};
