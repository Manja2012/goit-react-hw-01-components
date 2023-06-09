import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';
import {Profile} from 'components/Profile/Profile.jsx';
import {Statistics} from 'components/Statistics/Statistics.jsx';
import {FriendList} from 'components/FriendList/FriendList.jsx';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div>
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};


