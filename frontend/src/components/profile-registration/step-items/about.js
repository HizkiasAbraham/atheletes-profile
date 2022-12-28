import { Button, Grid, TextField } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Camera";

export default function About() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="location"
          label="Location"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="team" label="Team" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button startIcon={<PhotoIcon />} variant="outlined">
          Profile Picture
        </Button>
      </Grid>
    </Grid>
  );
}
