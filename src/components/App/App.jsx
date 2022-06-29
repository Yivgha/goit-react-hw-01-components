import { Box } from "./App.styled";
import { Profile } from "../Profile/Profile";
import data from 'data/data.json';
import friends from 'data/friends.json';
import user from 'data/user.json';
import { Statistics } from "components/Statistics/Statistics";
import ColorRandomizer from "helpers/ColorRandomizer";
import FriendList from "../FriendList/FriendList";
  
  
export const App = () => {
  return (
    <Box>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} fn={ColorRandomizer} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
      </Box>
  );
};
