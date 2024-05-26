import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress sx={{ color: '#F3AD59' }} />
    </Box>
  );
}
