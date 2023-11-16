import { Alert } from "@mui/joy";
import useRenderCount from "../hooks/useRenderCount";

const RenderCounter = () => {
  const renderCount = useRenderCount();

  return (
    <Alert
      color="warning"
      variant="soft"
      sx={{
        mt: 2,
      }}
    >
      Render Count: {renderCount}
    </Alert>
  );
};

export default RenderCounter;
