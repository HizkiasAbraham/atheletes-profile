import { Grid, TextField } from "@mui/material";

export default function BasicInformation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField id="name" label="Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="sport" label="Sport" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="gender" label="Gender" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="dob"
          label="Date of Birth"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
