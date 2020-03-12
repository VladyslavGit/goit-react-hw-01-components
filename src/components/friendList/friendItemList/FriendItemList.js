import React from "react";
import styles from "../FriendList.module.css";

const FriendItemList = ({ data: { isOnline, avatar, name } }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={{ backgroundColor: `${isOnline ? "red" : "green"}` }}
    ></span>
    <img className={styles.avatar} src={avatar} alt="img" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendItemList;
