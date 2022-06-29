import { Box } from "./App.styled";
import { Profile } from "../Profile/Profile";
import user from "../Profile/user.json";
import data from "../Statistics/data.json";
import { Statistics } from "components/Statistics/Statistics";
import ColorRandomizer from "helpers/ColorRandomizer";
  
  
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
      {/* <Statistics stats={data} fn={ColorRandomizer} /> */}
      {/* <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
      </Box>
  );
};
