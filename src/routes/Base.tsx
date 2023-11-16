import { Box, Link, Sheet, Typography } from "@mui/joy";
import useUserAuth from "../hooks/useUserAuth";
import Controls from "../components/Controls";
import User from "../components/User";

interface BaseProps {
  title: string;
  body: string;
  backLink: string | undefined;
  nextLink: string | undefined;
  docsLink?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Content: any;
}

function Base({
  title,
  body,
  backLink,
  nextLink,
  docsLink,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Content,
}: BaseProps) {
  const userAuth = useUserAuth();
  const { user, login } = userAuth;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          maxWidth: 800,
          flexDirection: "column",
        }}
      >
        <Sheet
          variant="soft"
          sx={{
            padding: 2,
          }}
        >
          <Typography level="h1">{title}</Typography>
          <Typography>{body}</Typography>
          {docsLink && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Link href={docsLink} target="_blank" rel="noopener">
                {docsLink}
              </Link>
            </Box>
          )}
        </Sheet>
        {user ? <User userAuth={userAuth} /> : <Content login={login} />}

        <Controls backLink={backLink} nextLink={nextLink} />
      </Box>
    </Box>
  );
}

export default Base;
