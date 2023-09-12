import { FriendList } from './FriendList/FriendList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from '../data/data.json';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <Layout>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
