import React from "react";
import Profile from "./profile/Profile";
import user from "./user.json";
import Statistics from "./statistics/Statistics";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import FriendList from "./friendList/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
