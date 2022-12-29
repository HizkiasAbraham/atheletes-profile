import { Button, Grid, TextField } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Camera";

export default function About({ formState, onChange }) {
  const onFormInputChange = (e) => {
    const { id, value } = e.target;
    onChange("about", { [id]: value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          id="description"
          value={formState.about.description}
          onChange={onFormInputChange}
          label="Description"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="location"
          value={formState.about.location}
          onChange={onFormInputChange}
          label="Location"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="team"
          value={formState.about.team}
          onChange={onFormInputChange}
          label="Team"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        Profile picture <br></br>{" "}
        <input
          id="profilePicture"
          onChange={(e) => {
            onFormInputChange({
              target: { id: "profilePicture", value: e.target.files[0] },
            });
          }}
          type={"file"}
        />
        {formState.about.profilePicture?.name}
      </Grid>
    </Grid>
  );
}
