import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import AccountIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import Loading from "../loading";
import { apiUrl, getAtheletProfileById, getProfileImage } from "../../api";

export default function ProfileDetail() {
  const [loading, setLoading] = useState(false);
  const [img, setImage] = useState("");
  const [data, setData] = useState(null);
  const { id } = useParams();

  const loadUserProfileDetail = async () => {
    setLoading(true);
    try {
      const result = await getAtheletProfileById(id);
      const image = await getProfileImage(result.profilePicture);
      setImage(image.img);
      setData(result);
      setLoading(false);
    } catch (error) {}
  };

  React.useEffect(() => {
    loadUserProfileDetail();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <img style={{ heigh: 200, width: 200 }} src={img} />

      <Typography variant="h5">Athelete Profile detail</Typography>
      <Divider />
      {loading && <Loading />}
      {!loading && !!data && (
        <Box textAlign={"center"}>
          <Typography variant="h4">
            <AccountIcon />
          </Typography>
          <Box p={2} pl={0} justifyItems={"center"}>
            <Typography>Basic Information</Typography>
            <Divider />
            <Grid container mb={2} spacing={2}>
              <Grid item xs={12}>
                Name: {data.name}
              </Grid>

              <Grid item xs={12}>
                Gender: {data.gender}
              </Grid>
              <Grid item xs={12}>
                DOB: {data.name}
              </Grid>
            </Grid>
            <Typography>About</Typography>
            <Divider />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                Description: {data.description}
              </Grid>

              <Grid item xs={12}>
                Location: {data.location}
              </Grid>
              <Grid item xs={12}>
                Team: {data.team}
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
}
