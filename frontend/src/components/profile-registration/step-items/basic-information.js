import { Autocomplete, Grid, TextField } from "@mui/material";
import { sports } from "../../../constants";

export default function BasicInformation({ formState, onChange }) {
  const onFormInputChange = (e) => {
    const { id, value } = e.target;
    onChange("basicInfo", { [id]: value });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          id="name"
          value={formState.basicInfo.name}
          onChange={onFormInputChange}
          label="Name"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          id="gender"
          value={formState.basicInfo.gender}
          onChange={onFormInputChange}
          label="Gender"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="dob"
          value={formState.basicInfo.dob}
          onChange={onFormInputChange}
          label="Date of Birth"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Autocomplete
          id="sport"
          value={formState.basicInfo.sport}
          onChange={onFormInputChange}
          disablePortal
          fullWidth
          options={sports}
          renderInput={(params) => <TextField {...params} label="Sport" />}
        />
      </Grid>
    </Grid>
  );
}
