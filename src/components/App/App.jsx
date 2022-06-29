import { Box } from "./App.styled";
import { Profile } from "../Profile/Profile";
import user from "../Profile/user.json";

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
      </Box>
  );
};
