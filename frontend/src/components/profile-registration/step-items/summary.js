import { Box, Divider, Grid, Typography } from "@mui/material";

export default function Summary({ formState }) {
  const { basicInfo, about } = formState;
  return (
    <Box p={2} pl={0} justifyItems={"center"}>
      <Typography>Basic Information</Typography>
      <Divider />
      <Grid container mb={2} spacing={2}>
        <Grid item xs={12}>
          Name: {basicInfo.name}
        </Grid>

        <Grid item xs={12}>
          Gender: {basicInfo.gender}
        </Grid>
        <Grid item xs={12}>
          DOB: {basicInfo.name}
        </Grid>
      </Grid>
      <Typography>About</Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Description: {about.description}
        </Grid>

        <Grid item xs={12}>
          Location: {about.location}
        </Grid>
        <Grid item xs={12}>
          Team: {basicInfo.team}
        </Grid>
      </Grid>
    </Box>
  );
}
