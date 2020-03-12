import React from "react";
import TableItem from "./tableItem/TableItem";
import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <TableItem data={item} key={item.id} />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
};
