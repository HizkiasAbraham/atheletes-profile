import { Autocomplete, Grid, TextField } from "@mui/material";
import { sports } from "../../../constants";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicInformation({ formState, onChange }) {
  const onFormInputChange = (e, val) => {
    const { id, value } = e.target;
    onChange("basicInfo", {
      [id.split("-")?.[0]]: id.startsWith("sport-") ? val : value,
    });
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id="dob"
            label="Birth Day"
            value={formState.basicInfo.dob}
            onChange={(value) =>
              onFormInputChange({ target: { id: "dob", value } })
            }
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
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
