import { Sheet } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";

<Link component={RouterLink} to="/docs">
  Read doc
</Link>;

interface ControlsProps {
  backLink?: string;
  nextLink?: string;
}
const Controls = (props: ControlsProps) => {
  const { backLink, nextLink } = props;
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 1,
        mt: 2,
      }}
    >
      <Link component={RouterLink} to={backLink || ""} disabled={!backLink}>
        Previous
      </Link>
      <Link component={RouterLink} to={nextLink || ""} disabled={!nextLink}>
        Next
      </Link>
    </Sheet>
  );
};

export default Controls;
