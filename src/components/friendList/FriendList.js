import React from "react";
import FriendItemList from "./friendItemList/FriendItemList";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(friend => (
      <FriendItemList data={friend} key={friend.id} />
    ))}
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number
};
