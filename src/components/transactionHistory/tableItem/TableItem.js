import React from "react";

const TableItem = ({ data: { type, amount, currency } }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default TableItem;
