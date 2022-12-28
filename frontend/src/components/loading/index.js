import { CircularProgress, Box, Typography } from "@mui/material";

export default function Loading({ message = "Loading..." }) {
  return (
    <Box textAlign={"center"} p={2}>
      <CircularProgress size={50} />
      <Typography>{message}</Typography>
    </Box>
  );
}
