import { Button, Sheet, Typography } from "@mui/joy";
import { UserAuthType } from "../hooks/useUserAuth";

interface PropsTypes {
  userAuth: UserAuthType;
}

const User = ({ userAuth }: PropsTypes) => {
  const { user, logout } = userAuth;

  return (
    <Sheet
      variant="outlined"
      sx={{
        padding: 2,
      }}
    >
      <Typography level="h1">Success!</Typography>
      <Typography>
        Username: <strong>{user?.username}</strong>
      </Typography>
      <Typography>
        Email: <strong>{user?.email}</strong>
      </Typography>

      <Button
        variant="solid"
        onClick={() => {
          logout();
        }}
        sx={{
          mt: 2,
        }}
      >
        Logout
      </Button>
    </Sheet>
  );
};

export default User;
