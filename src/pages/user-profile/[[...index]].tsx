import { UserProfile } from "@clerk/nextjs";
import { Card, Stack } from "@mui/material";

const UserProfilePage = () => (
  <Stack alignItems="center">
    <UserProfile path="/user-profile" routing="path" />
  </Stack>
);

export default UserProfilePage;
