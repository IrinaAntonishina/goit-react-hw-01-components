
import { FriendList } from "./FriendList/FriendList";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import data from './data.json'
import transactions from './transactions.json'


export const App = () => {
  return (
    <Layout>
<Profile />
<Statistics title="Upload stats" stats={data}/>
{/* <Statistics stats={data}/> */}
<FriendList />
<TransactionHistory transactions={transactions}/>
<GlobalStyle />
</Layout>
  );
};
